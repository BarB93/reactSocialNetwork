import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS'
const DELETE_POST = 'DELETE_POST'


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
        case DELETE_POST:
            return {...state, posts: state.posts.filter(item => item.id !== action.postId)}
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
export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId

})

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response))
}
export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response))
}
export const updateUserStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)

    if (response.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export default profileReducer