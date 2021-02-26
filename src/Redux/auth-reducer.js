import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'network/auth/SET_USER_DATA'
const TOGGLE_IS_FETCHING = 'network/auth/TOGGLE_IS_FETCHING'
const SET_CAPTCHA_URL_SUCCESS = 'network/auth/SET_CAPTCHA_URL_SUCCESS'


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
    captchaUrl: null //if null, then captcha is not required
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL_SUCCESS:
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

export const setAuthUserData = (userId, email, login, isAuth) => {return {type: SET_USER_DATA, payload: {userId, email, login, isAuth}}}
export const setIsFetching = (isFetching) => {return {type: TOGGLE_IS_FETCHING, isFetching}}
export const setCaptchaUrl = (captchaUrl) => {return {type: SET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}}}

export const getAuthUserData = () => async (dispatch) => {
    dispatch(setIsFetching(true))
    let response = await authAPI.getAuth()

    if (response.resultCode === 0) {
        dispatch(setIsFetching(false))
        let {id, login, email} = response.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.resultCode === 0) {
        dispatch(getAuthUserData())
    }else {
        if(response.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.url

    dispatch(setCaptchaUrl(captchaUrl))
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()

    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer