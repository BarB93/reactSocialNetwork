import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import asideReducer from './aside-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import appReducer from "./app-reducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    aside: asideReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,


})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));

window.__store__ = store

export default store