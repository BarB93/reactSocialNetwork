import {authAPI} from "../api/api";

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
                ...action.data,
                isAuth: true
            }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data:{userId, email, login}
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

       authAPI.getAuth()
            .then(response => {
                if(response.resultCode === 0) {
                    dispatch(setIsFetching(false))
                    let {id,login,email} = response.data
                    dispatch(setAuthUserData(id, login, email))
                }
            })
    }
}

//beta
export const postAuthentication = (email,password,rememberMe= false) => {
    return (dispatch) => {

        authAPI.postAuth(email,password,rememberMe)
            .then(data => {
                debugger
            })
    }
}

export default authReducer