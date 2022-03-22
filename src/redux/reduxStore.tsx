import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogueReducer: dialoguesReducer
})

const store = createStore(reducers);

export type ReduxStoreType = typeof store;

export default store;
