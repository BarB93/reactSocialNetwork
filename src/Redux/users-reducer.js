import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helpers";

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

}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SUBSCRIBE:
            return {...state, users: updateObjectInArray(state.users,action.userId, 'id',{followed:true})}
        case UNSUBSCRIBE:
            return {...state, users: updateObjectInArray(state.users,action.userId, 'id',{followed:false})}
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

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(page))
    const response = await usersAPI.getUsers(page, pageSize)

    dispatch(setIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))

}

const subscribeUnsubscribeFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleSubscribingProgress(true, userId))

    const response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }

    dispatch(toggleSubscribingProgress(false, userId))
}

export const unsubscribe = (id) => async (dispatch) => {
    await subscribeUnsubscribeFlow(dispatch,id,usersAPI.unsubscribe,userUnsubscribe)
}
export const subscribe = (id) => async (dispatch) => {
    await subscribeUnsubscribeFlow(dispatch,id,usersAPI.subscribe,userSubscribe)
}


export default usersReducer