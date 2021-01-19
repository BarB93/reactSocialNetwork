const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

let initialStore = {
    posts: [
        {id: 1, message: 'Привет, как дела?', likes: 6,},
        {id: 2, message: 'учу реакт', likes: 23},
        {id: 3, message: 'вообще сил много', likes: 17},
    ],

        newPostText: ''
}

const profileReducer = (state = initialStore, action) => {

    function addPost() {
        const posts = state.posts
        posts.push({
            id: ++posts.length,
            message: state.newPostText,
            likes: 0,
        })
        state.newPostText = ''

    }
    function updateNewPostText(newText) {
        state.newPostText = newText

    }

    switch (action.type) {

        case ADD_POST:
            addPost()
            return state
        case UPDATE_POST_TEXT:
            updateNewPostText(action.newText)
            return state
        default:
            return state
    }

}

export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updatePostTextActionCreator = (text) => ({
    type: UPDATE_POST_TEXT,
    newText: text
})

export default  profileReducer