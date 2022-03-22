import {ActionsTypes, ProfilePageType} from "./state";

export const ADD_POST = 'ADD-POST';
export const CHANGE_TEXT = 'CHANGE-TEXT';

const initialProfile = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 34},
        {id: 2, message: "Need more time!!", likesCount: 135},
        {id: 3, message: "Great app", likesCount: 78},
        {id: 4, message: "It's my first post", likesCount: 14}
    ],
    newMessageText: ''
}

const profileReducer = (state: ProfilePageType = initialProfile, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newMessageText = '';
            return state;
        case CHANGE_TEXT:
            state.newMessageText = action.newText;
            return state;
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