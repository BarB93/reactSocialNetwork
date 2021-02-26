import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialStore = {
    posts: [
        {id: 1, message: 'Привет, как дела?', likes: 6,},
        {id: 2, message: 'учу реакт', likes: 23},
        {id: 3, message: 'вообще сил много', likes: 17},
    ],
    newPostText: '',
    profile: null,
    status: '',
    savePhotoSuccess: false
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
        case SAVE_PHOTO_SUCCESS:
            return {...state,profile: {...state.profile,photos:action.photos}}
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

}

export const addPost = (text) => ({type: ADD_POST, text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})


export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response))
}
export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response))
}
export const updateUserStatus = (status) => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status)

        if (response.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    }catch (error) {
        alert(error.message)
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.putPhoto(file)

    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const response = await profileAPI.putProfile(profile)

    if (response.resultCode === 0) {
        dispatch(getUserProfile(getState().auth.userId))
    }else {
        dispatch(stopSubmit('profile-form', {_error: response.messages[0]}))
        return Promise.reject(response.messages[0])
    }
}

export default profileReducer