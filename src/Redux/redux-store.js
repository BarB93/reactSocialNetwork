import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import asideReducer from "./aside-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    aside: asideReducer
})

let store = createStore(reducers)

window.store = store

export default store