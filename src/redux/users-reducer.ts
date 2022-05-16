import {usersAPI} from "../api/api";
import {AppThunk} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

export type UsersReducerStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type UserType = {
    id: number
    photos: { small: string, large: string }
    followed: boolean
    name: string
    uniqueUrlName: null | string
    status: null | string
}
export type UsersResponseType = {
    items: UserType[]
    totalCount: number
    error: null | string
}
export type UsersFollowResponseType = {
    resultCode: number
    messages: string
    data: {}
}

const initialUsers: UsersReducerStateType = {
    users: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state: UsersReducerStateType = initialUsers,
                      action: UsersReducerActionType): UsersReducerStateType => {
    switch (action.type) {
        case FOLLOW:
            return ({
                ...state,
                users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)
            })
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)
            };
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUserCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(el => el !== action.userId)
            }
        default:
            return state;
    }
}
// ACTION TYPE
export type UsersReducerActionType = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>

// ACTION CREATORS
export const follow = (userID: number) => ({type: FOLLOW, userID} as const);
export const unfollow = (id: number) => ({type: UNFOLLOW, userID: id} as const);
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const);
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const);
export const setTotalUsersCount = (totalUserCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUserCount} as const);
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const);
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) =>
    ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const);

// THUNK CREATORS
export const getUsers = (page: number, pageSize: number): AppThunk => async dispatch => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        const data = await usersAPI.getUsers(page, pageSize)
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
}
export const followUsers = (id: number): AppThunk => async dispatch => {
        dispatch(toggleIsFollowingProgress(true, id))
        const data = await usersAPI.followUsers(id)
            if (data.resultCode === 0) {
                dispatch(follow(id));
            }
            dispatch(toggleIsFollowingProgress(false, id));
}
export const unFollowUsers = (id: number): AppThunk => async dispatch => {
        dispatch(toggleIsFollowingProgress(true, id))
        const data = await usersAPI.unFollowUsers(id)
            if (data.resultCode === 0) {
                dispatch(unfollow(id));
            }
            dispatch(toggleIsFollowingProgress(false, id));
}

export default usersReducer;
