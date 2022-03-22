import {ActionsTypes, ProfilePageType} from "./state";

export const ADD_POST = 'ADD-POST';
export const CHANGE_TEXT = 'CHANGE-TEXT';


const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
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