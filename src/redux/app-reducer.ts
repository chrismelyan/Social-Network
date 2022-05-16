import {getAuthUserData} from "./auth-reducer";
import {AppThunk} from "./store";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

type AppReducerType = {
    initialized: boolean
}

const initialUsers = {
    initialized: false
}

const appReducer = (state: AppReducerType = initialUsers, action: AppReducerActionType): AppReducerType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}
        default:
            return state;
    }
}
// ACTION TYPE
export type AppReducerActionType = ReturnType<typeof initializedSuccessAC>

// ACTION CREATORS
export const initializedSuccessAC = () => ({type: INITIALIZED_SUCCESS} as const);

// THUNK CREATORS
export const initializeApp = (): AppThunk => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccessAC());
    })
}

export default appReducer;