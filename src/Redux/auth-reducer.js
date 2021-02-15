import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


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
        payload:{userId, email, login, isAuth}
    }
}
export const setIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const getAuthUserData = () => {
    return (dispatch) => {
        dispatch(setIsFetching(true))

       return authAPI.getAuth()
            .then(response => {
                if(response.resultCode === 0) {
                    dispatch(setIsFetching(false))
                    let {id,login,email} = response.data
                    dispatch(setAuthUserData(id, login, email,true))
                }
            })

    }
}

export const login = (email,password,rememberMe) => {
    return (dispatch) => {
        authAPI.login(email,password,rememberMe)
            .then(data => {

                if(data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }else {
                    let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
                    dispatch(stopSubmit("login",{_error:message}))
                }
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}

export default authReducer