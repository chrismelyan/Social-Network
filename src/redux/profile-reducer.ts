import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export const ADD_POST = 'ADD-POST';
export const CHANGE_TEXT = 'CHANGE-TEXT';
export const SET_USER_PROFILE = 'SET-USER-PROFILE';

export type ProfilePageType = {
    posts: PostsType[]
    newMessageText: string
    profile: ProfileResponseType | null
}

export type ProfileResponseType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {small: string, large: string}
}

type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
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
    newMessageText: '',
    profile: null
}

const  profileReducer = (state: ProfilePageType = initialProfile, action: ProfileReducerActionType): ProfilePageType => {
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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
}

export type ProfileReducerActionType = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeTextAC>
    | ReturnType<typeof setUserProfile>

export const addPostAC = (postMessage: string) => ({type: ADD_POST, postMessage: postMessage} as const)
export const changeTextAC = (newText: string) => ({type: CHANGE_TEXT, newText: newText} as const)
export const setUserProfile = (profile: ProfileResponseType) => ({type: SET_USER_PROFILE, profile} as const)

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.showProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
    });
}

export default profileReducer;