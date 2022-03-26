import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";
import usersReducer from "./users-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    usersPage: usersReducer
})

const store = createStore(rootReducer);

export type ReduxStoreType = typeof store;
export type RootStateType = ReturnType<typeof rootReducer>;

export default store;
