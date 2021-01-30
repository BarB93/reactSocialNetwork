const SUBSCRIBE = 'SUBSCRIBE'
const UNSUBSCRIBE = 'UNSUBSCRIBE'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {

    switch (action.type){
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
        default:
            return state
    }

    function subscribeToUser() {

        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, isSubscribe: true}
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
                    return {...u, isSubscribe: false}
                }
                return u
            })
        }
    }
}



export const subscribeAC = (userId) => {
    return {
        type: SUBSCRIBE,
        userId
    }
}
export const unsubscribeAC = (userId) => {
    return {
        type: UNSUBSCRIBE,
        userId
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPageAC = (num) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: num
    }
}

export  const setTotalUsersCountAC = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
}

export  const setIsFetchingAC = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}


export  default usersReducer