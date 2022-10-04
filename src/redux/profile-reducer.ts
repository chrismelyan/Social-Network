import {profileAPI} from "../api/api";
import {AppThunk} from "./store";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE-PHOTO-SUCCESS';

export type ProfilePageType = {
    posts: PostsType[]
    profile: ProfileType | null
    status: string
    photos: PhotosType
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
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
}
export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

const initialProfile: ProfilePageType = {
    posts: [
        {id: 1, message: "It's been tough. Guess I need more sleep and coffee.", likesCount: 78},
        {id: 2, message: "Let's get it started. Wanna have some fun?", likesCount: 14}
    ],
    profile: null,
    status: '',
    photos: {small: null, large: null}
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
            return {...state, profile: action.profile, photos: action.photos};
        case SET_STATUS:
            return {...state, status: action.status};
        case SAVE_PHOTO_SUCCESS:
            return {...state, photos: action.photos}
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
export const setUserProfile = (profile: ProfileType, photos: PhotosType) => ({type: SET_USER_PROFILE, profile, photos} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)

// THUNK CREATORS
export const getUserProfile = (userId: number): AppThunk => async dispatch => {
    const response = await profileAPI.showProfile(userId)
    const {photos,
        aboutMe,
        contacts,
        lookingForAJob,
        lookingForAJobDescription,
        fullName} = response.data
    const profile = {aboutMe, contacts, lookingForAJob, lookingForAJobDescription, fullName}
    dispatch(setUserProfile(profile, photos));
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
export const savePhoto = (photo: File): AppThunk =>
    async (dispatch, getState) => {
    const state = getState();
    const userId = state.auth.id;
    let response = await profileAPI.savePhotoSuccess(photo);
    if (response.data.resultCode === 0) {
        if (userId)
            dispatch(getUserProfile(userId))
    }
}
export const saveProfile = (data: ProfileType): AppThunk =>
    async (dispatch, getState) => {
    const state = getState();
    const userId = state.auth.id;
    let response = await profileAPI.saveProfile(data)
    if (response.data.resultCode === 0) {
        if (userId)
        dispatch(getUserProfile(userId))
    }
}

export default profileReducer;