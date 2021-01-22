const SUBSCRIBE = 'SUBSCRIBE'
const UNSUBSCRIBE = 'UNSUBSCRIBE'
const SET_USERS = 'SET_USERS'

const initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type){
        case SUBSCRIBE:
            return subscribeToUser()
        case UNSUBSCRIBE:
            return unsubscribeToUser()
        case SET_USERS:
            return {...state, users: [...state.users,...action.users]}
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


export  default usersReducer