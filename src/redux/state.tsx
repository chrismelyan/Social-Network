// import {rerenderEntireTree} from "../index";
import profileReducer, {addPostAC, changeTextAC} from "./profile-reducer";
import dialoguesReducer, {sendMessageAC, updateDialoguesTextAC} from "./dialogues-reducer";

type MessagesType = {
    id: number
    message: string
}
type DialoguesType = {
    id: number
    name: string
}
type PostsType = {
    id: number
    message: string
    likesCount: number
}

type ProfilePageType = {
    posts: PostsType[]
    newMessageText: string
}

type DialoguesPageType = {
    dialogues: DialoguesType[]
    messages: MessagesType[]
    newDialogueText: string
}

type RootStateType = {
    profilePage: ProfilePageType
    dialoguesPage: DialoguesPageType
}

type StoreType = {
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
        // rerenderEntireTree(store)
    },
    changeText(newText: string) {
        this._state.profilePage.newMessageText = newText
        // rerenderEntireTree(store)
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action);
        // rerenderEntireTree(store);
    }
}

export default store;