export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';

export type UsersReducerStateType = {
    users: UserType[]
}

export type UserType = {
    id: number
    photos: { small: null | string, large: null | string }
    followed: boolean
    name: string
    uniqueUrlName: null | string
    status: null | string
    // location: LocationType
}

export type UsersResponseType = {
    items: UserType[]
    totalCount: number
    error: null | string
}

// type LocationType = {
//     city: string
//     country: string
// }

const initialUsers: UsersReducerStateType = {
    users: []
}

const usersReducer = (state: UsersReducerStateType = initialUsers, action: UsersReducerActionType): UsersReducerStateType => {
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
            return {
                ...state,
                users: [...action.users]
            }
        default:
            return state;
    }
}
export type UsersReducerActionType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

export const followAC = (userID: number) => ({type: FOLLOW, userID} as const);

export const unfollowAC = (id: number) => ({type: UNFOLLOW, userID: id} as const);
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const);

export default usersReducer;