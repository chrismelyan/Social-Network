import {ActionsTypes} from "./state";

export const ADD_POST = 'ADD-POST';
export const CHANGE_TEXT = 'CHANGE-TEXT';

export type ProfilePageType = {
    posts: PostsType[]
    newMessageText: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

const initialProfile: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 34},
        {id: 2, message: "Need more time!!", likesCount: 135},
        {id: 3, message: "Great app", likesCount: 78},
        {id: 4, message: "It's my first post", likesCount: 14}
    ],
    newMessageText: ''
}

const profileReducer = (state: ProfilePageType = initialProfile, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            }
            return {
                ...state,
               posts: [...state.posts, newPost],
                newMessageText: ''
            };
        case CHANGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
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

export default profileReducer;