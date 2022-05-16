import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileReducerActionType} from "./profile-reducer";
import dialoguesReducer, {DialoguesReducerActionType} from "./dialogues-reducer";
import usersReducer, {UsersReducerActionType} from "./users-reducer";
import authReducer, {AuthReducerActionType} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import appReducer, {AppReducerActionType} from "./app-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// TYPES
export type RootStateType = ReturnType<typeof rootReducer>;
export type AppActionsType = AuthReducerActionType
    | DialoguesReducerActionType
    | ProfileReducerActionType
    | UsersReducerActionType
    | AppReducerActionType

// ThunkAction type:
// 1 - return type used by getState (void)
// 2 - state type (RootTypeState)<
// 3 - any 'extra arguments' injected into the thunk ( unknown )
// 4 - all state actions
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, AppActionsType>

// @ts-ignore
window.store = store;
export default store;
