import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS'



let initialStore = {
    posts: [
        {id: 1, message: 'Привет, как дела?', likes: 6,},
        {id: 2, message: 'учу реакт', likes: 23},
        {id: 3, message: 'вообще сил много', likes: 17},
    ],
    newPostText: '',
    profile: null,
    status: ''


}

const profileReducer = (state = initialStore, action) => {

    switch (action.type) {
        case ADD_POST:
            return addPost(action.text)
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        case UPDATE_USER_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }

    function addPost(text) {

        const post = {
            id: state.posts.length + 1,
            message: text,
            likes: 0,
        }

        return {
            ...state,
            posts: [...state.posts, post],
            newPostText: ''
        }
    }

    function updateNewPostText(newText) {
        return {
            ...state,
            newPostText: newText
        }
    }

}

export const addPost = (text) => ({
    type: ADD_POST,
    text
})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile

})
export const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status

})

export const getUserProfile = (userId) => {
    return (dispatch) => {
            profileAPI.getProfile(userId)
                .then(data => {
                    dispatch(setUserProfile(data))
                })

    }
}
export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
                .then(data => {
                    dispatch(setUserStatus(data))
                })
    }
}
export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
                .then(data => {
                    if(data.resultCode === 0){
                        dispatch(setUserStatus(status))
                    }
                })
    }
}

export default profileReducer