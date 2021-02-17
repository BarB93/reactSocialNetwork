import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'network/auth/SET_USER_DATA'
const TOGGLE_IS_FETCHING = 'network/auth/TOGGLE_IS_FETCHING'


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,

            }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    }
}
export const setIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const getAuthUserData = () => async (dispatch) => {
        dispatch(setIsFetching(true))
        let response = await authAPI.getAuth()

        if (response.resultCode === 0) {
            dispatch(setIsFetching(false))
            let {id, login, email} = response.data
            dispatch(setAuthUserData(id, login, email, true))
        }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
        const response = await authAPI.login(email, password, rememberMe)

        if (response.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
            dispatch(stopSubmit("login", {_error: message}))
        }
}

export const logout = () => async (dispatch) => {
        const response = await authAPI.logout()

        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
}

export default authReducer