import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'



let initialStore = {
    posts: [
        {id: 1, message: 'Привет, как дела?', likes: 6,},
        {id: 2, message: 'учу реакт', likes: 23},
        {id: 3, message: 'вообще сил много', likes: 17},
    ],
    newPostText: '',
    profile: null,


}

const profileReducer = (state = initialStore, action) => {

    switch (action.type) {
        case ADD_POST:
            return addPost()
        case UPDATE_POST_TEXT:
            return updateNewPostText(action.newText)
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }

    function addPost() {
        const post = {
            id: state.length + 1,
            message: state.newPostText,
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

export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updatePostTextActionCreator = (text) => ({
    type: UPDATE_POST_TEXT,
    newText: text
})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile

})

export const getUserProfile = (userId) => {
    return (dispatch) => {

        if(!userId) {
            userId = 2
        }
        usersAPI.getProfile(userId)
                .then(data => {
                    dispatch(setUserProfile(data))
                })

    }
}

export default profileReducer