import {profileAPI} from "../api/api";
import {AppThunk} from "./store";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE-PHOTO-SUCCESS';

export type ProfilePageType = {
    posts: PostsType[]
    profile: ProfileResponseType | null
    status: string
}
export type ProfileResponseType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
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
type PhotosType = {
    small: string
    large: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

const initialProfile: ProfilePageType = {
    posts: [
        {id: 1, message: "Great app", likesCount: 78},
        {id: 2, message: "It's my first post", likesCount: 14}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state: ProfilePageType = initialProfile,
                        action: ProfileReducerActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost]};
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileResponseType}
        default:
            return state;
    }
}
// ACTION TYPE
export type ProfileReducerActionType = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof savePhotoSuccess>

// ACTION CREATORS
export const addPostAC = (postMessage: string) => ({type: ADD_POST, postMessage} as const)
export const deletePostAC = (postId: number) => ({type: DELETE_POST, postId} as const)
export const setUserProfile = (profile: ProfileResponseType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)

// THUNK CREATORS
export const getUserProfile = (userId: number): AppThunk => async dispatch => {
    const response = await profileAPI.showProfile(userId)
    dispatch(setUserProfile(response.data));
}
export const getUserStatus = (userId: number): AppThunk => async dispatch => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateUserStatus = (status: string): AppThunk => async dispatch => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (photo: File): AppThunk => async dispatch => {
    let response = await profileAPI.savePhotoSuccess(photo);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data));
    }
}

export default profileReducer;