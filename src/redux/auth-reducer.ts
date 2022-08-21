import {authAPI, securityAPI} from "../api/api";
import {AppThunk} from "./store";

const SET_USER_DATA = 'auth/SET-USER-DATA';
const GET_CAPTCHA = 'auth/GET-CAPTCHA';

export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
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
export type LoginResponseType = {
    resultCode: number
    messages: Array<string>
    data: {
        userId: number
    }
}

const initialUsers: AuthDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialUsers, action: AuthReducerActionType): AuthDataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data}
        case GET_CAPTCHA:
            return {...state, captchaUrl: action.captcha}
        default:
            return state;
    }
}
// ACTION TYPE
export type AuthReducerActionType = ReturnType<typeof setUserDataAC> | ReturnType<typeof getCaptchaUrl>

// ACTION CREATORS
export const setUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
} as const);
export const getCaptchaUrl = (captcha: string) => ({type: GET_CAPTCHA, captcha} as const);

// THUNK CREATORS
export const getAuthUserData = (): AppThunk => async dispatch => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setUserDataAC(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null,
                      setStatus: (status?: any) => void): AppThunk => async dispatch => {
    const res = await authAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (res.data.resultCode === 10) {
            dispatch(getCaptcha());
        }
        setStatus(res.data.messages)
    }
}

export const getCaptcha = (): AppThunk => async dispatch => {
    const res = await securityAPI.getCaptcha();
    const captchaUrl = res.data.url;
    dispatch(getCaptchaUrl(captchaUrl))
}

export const logout = (): AppThunk => async dispatch => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false));
    }
}

export default authReducer;