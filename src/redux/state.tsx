import {rerenderEntireTree} from "../index";

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
export type RootStateType = {
    posts: PostsType[]
    newMessageText: string
    dialogues: DialoguesType[]
    messages: MessagesType[]
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    addPost: (postMessage: string) => void
    changeText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeTextAC>

const store: StoreType = {
    _state: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 34},
            {id: 2, message: "Need more time!!", likesCount: 135},
            {id: 3, message: "Great app", likesCount: 78},
            {id: 4, message: "It's my first post", likesCount: 14}
        ],
        newMessageText: '',
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
        ]
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
        this._state.posts.push(newPost)
        this._state.newMessageText = ''
        rerenderEntireTree(store)
    },
    changeText(newText: string) {
        this._state.newMessageText = newText
        rerenderEntireTree(store)
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            }
            this._state.posts.push(newPost)
            this._state.newMessageText = ''
            rerenderEntireTree(store)
        } else if (action.type === 'CHANGE-TEXT') {
            this._state.newMessageText = action.newText
            rerenderEntireTree(store)
        }
    }
}

export const addPostAC = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage: postMessage
    } as const
}

export const changeTextAC = (newText: string) => {
    return {
        type: 'CHANGE-TEXT',
        newText: newText
    } as const
}

export default store;