export const SET_USER_DATA = 'SET-USER-DATA';

export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type AuthResponseType = {
    resultCode: number
    messages: Array<string>
    data: {
        id: number
        email: string
        login: string
    }
}

const initialUsers: AuthDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialUsers, action: AuthReducerActionType): AuthDataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return ({
                ...state,
                ...action.data,
                isAuth: true
            })
        default:
            return state;
    }
}
export type AuthReducerActionType = ReturnType<typeof setUserDataAC>

export const setUserDataAC = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {id, email, login}
} as const);


export default authReducer;