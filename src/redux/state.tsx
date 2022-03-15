import {rerenderEntireTree} from "../index";

const ADD_POST = 'ADD-POST';
const CHANGE_TEXT = 'CHANGE-TEXT';
const UPDATE_DIALOGUES_TEXT = 'UPDATE-DIALOGUES-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

export type MessagesType = {
    id: number
    message: string
}
export type DialoguesType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsType[]
    newMessageText: string
}

export type DialoguesPageType = {
    dialogues: DialoguesType[]
    messages: MessagesType[]
    newDialogueText: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialoguesPage: DialoguesPageType
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    addPost: (postMessage: string) => void
    changeText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeTextAC>
    | ReturnType<typeof updateDialoguesTextAC>
    | ReturnType<typeof sendMessageAC>

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 34},
                {id: 2, message: "Need more time!!", likesCount: 135},
                {id: 3, message: "Great app", likesCount: 78},
                {id: 4, message: "It's my first post", likesCount: 14}
            ],
            newMessageText: ''
        },
        dialoguesPage: {
            dialogues: [
                {id: 1, name: 'Chris'},
                {id: 2, name: 'Kristen'},
                {id: 3, name: 'Victor'},
                {id: 4, name: 'Mary'},
                {id: 5, name: 'Zac'},
                {id: 6, name: 'Carey'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is it goin?'},
                {id: 3, message: 'Awesome!'}
            ],
            newDialogueText: ''
        }
    },
    getState() {
        return this._state
    },
    addPost(postMessage: string) {
        const newPost = {
            id: 5,
            message: postMessage,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newMessageText = ''
        rerenderEntireTree(store)
    },
    changeText(newText: string) {
        this._state.profilePage.newMessageText = newText
        rerenderEntireTree(store)
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newMessageText = '';
            rerenderEntireTree(store);
        } else if (action.type === CHANGE_TEXT) {
            this._state.profilePage.newMessageText = action.newText;
            rerenderEntireTree(store);
        } else if (action.type === UPDATE_DIALOGUES_TEXT) {
            this._state.dialoguesPage.newDialogueText = action.body;
            rerenderEntireTree(store);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialoguesPage.newDialogueText;
            this._state.dialoguesPage.newDialogueText = '';
            this._state.dialoguesPage.messages.push({id: 4, message: body});
            rerenderEntireTree(store);
        }
    }
}

export const addPostAC = (postMessage: string) => {
    return {
        type: ADD_POST,
        postMessage: postMessage
    } as const
}

export const changeTextAC = (newText: string) => {
    return {
        type: CHANGE_TEXT,
        newText: newText
    } as const
}

export const updateDialoguesTextAC = (body: string) => {
    return {
        type: UPDATE_DIALOGUES_TEXT,
        body: body
    } as const
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}

export default store;