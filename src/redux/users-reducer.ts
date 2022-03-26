export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';

export type UsersStateType = {
    users: UserType[]
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

type LocationType = {
    city: string
    country: string
}

const initialUsers: UsersStateType = {
    users: [
        {
            id: 1,
            photoUrl: 'https://www.theplace2.ru/cache/archive//img/square-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg',
            followed: false,
            fullName: 'Christina',
            status: 'JS is tough!',
            location:
                {
                    city: 'Brest',
                    country: 'Belarus'
                }
        },
        {
            id: 2,
            photoUrl: 'https://www.theplace2.ru/cache/archive//img/square-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg',
            followed: true,
            fullName: 'Tom',
            status: 'On my way to Brazil',
            location:
                {
                    city: 'London',
                    country: 'UK'
                }
        },
        {
            id: 3,
            photoUrl: 'https://www.theplace2.ru/cache/archive//img/square-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg',
            followed: false,
            fullName: 'David',
            status: 'Watching memes',
            location:
                {
                    city: 'Warsaw',
                    country: 'Poland'
                }
        },
        {
            id: 4,
            photoUrl: 'https://www.theplace2.ru/cache/archive//img/square-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg',
            followed: true,
            fullName: 'Mary',
            status: 'Great day!',
            location:
                {
                    city: 'Kyev',
                    country: 'Ukraine'
                }
        }
    ]
}

const usersReducer = (state: UsersStateType = initialUsers, action: UsersReducerActionType): UsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)
            };
        case SET_USERS:
            return {
                ...state,
                users: {...state.users, ...action.newUser}
            }
        default:
            return state;
    }
}
export type UsersReducerActionType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

export const followAC = (id: number) => {
    return {
        type: FOLLOW,
        userID: id
    } as const
}

export const unfollowAC = (id: number) => {
    return {
        type: UNFOLLOW,
        userID: id
    } as const
}
export const setUsersAC = (user: UsersStateType) => {
    return {
        type: SET_USERS,
        newUser: user
    } as const
}

export default usersReducer;