import {usersAPI} from "../api/api";

const SUBSCRIBE = 'SUBSCRIBE'
const UNSUBSCRIBE = 'UNSUBSCRIBE'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SUBSCRIBING_IN_PROGRESS = 'SUBSCRIBING_IN_PROGRESS'

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    subscribingProgress: [],
    fake:10
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case "FAKE": return {...state,fake: state.fake + 1}
            return subscribeToUser()
        case SUBSCRIBE:
            return subscribeToUser()
        case UNSUBSCRIBE:
            return unsubscribeToUser()
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case SUBSCRIBING_IN_PROGRESS:
            return {
                ...state,
                subscribingProgress: action.isFetching ? [...state.subscribingProgress, action.userId] : state.subscribingProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }

    function subscribeToUser() {

        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u
            })
        }
    }

    function unsubscribeToUser() {

        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: false}
                }
                return u
            })
        }
    }
}


export const userSubscribe = (userId) => {
    return {
        type: SUBSCRIBE,
        userId
    }
}
export const userUnsubscribe = (userId) => {
    return {
        type: UNSUBSCRIBE,
        userId
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPage = (num) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: num
    }
}
export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
}
export const setIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export const toggleSubscribingProgress = (isFetching, userId) => {
    return {
        type: SUBSCRIBING_IN_PROGRESS,
        isFetching,
        userId
    }
}

export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true))
        dispatch(setCurrentPage(page))
        usersAPI.getUsers(page, pageSize)
            .then(data => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}
export const unsubscribe = (id) => {
    return (dispatch) => {
        dispatch(toggleSubscribingProgress(true, id))
        usersAPI.deleteUsers(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(userUnsubscribe(id))
                }
                dispatch(toggleSubscribingProgress(false, id))
            })
    }
}
export const subscribe = (id) => {

    return (dispatch) => {

        dispatch(toggleSubscribingProgress(true, id))
        usersAPI.postUsers(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(userSubscribe(id))
                }
                dispatch(toggleSubscribingProgress(false, id))
            })
    }
}



export default usersReducer