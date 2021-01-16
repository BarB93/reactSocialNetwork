const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'


const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Привет, как дела?', likes: 6,},
                {id: 2, message: 'учу реакт', likes: 23},
                {id: 3, message: 'вообще сил много', likes: 17},
            ],

            newPostText: 'введите текст'
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Борис Б'},
                {id: 2, name: 'Натали Б'},
                {id: 3, name: 'Лариса'},
                {id: 4, name: 'Андрей'},
                {id: 5, name: 'Макс'},
            ],
            messages: [
                {id: 1, message: 'Привет', who: 'my'},
                {id: 2, message: 'Как ты', who: 'my'},
                {id: 3, message: 'Йоу, норм', who: 'not_my'},
                {id: 4, message: 'Здоров', who: 'not_my'},
                {id: 5, message: 'хав ю', who: 'not_my'},
                {id: 6, message: 'Пойдешь гулять', who: 'my'},
                {id: 7, message: 'Привет2', who: 'not_my'},
                {id: 8, message: 'Как ты2', who: 'my'},
                {id: 9, message: 'Йоу, норм2', who: 'not_my'}
            ],
            newMessageText: ''
        },
        aside: {
            frends: [
                {id: 1, avatar: null, name: 'Борис'},
                {id: 4, avatar: null, name: 'Андрей'},
                {id: 3, avatar: null, name: 'Лариса'},
                {id: 2, avatar: null, name: 'Наталья'},
            ]
        }
    },
    _callSubscriber() {
        console.log("Render")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },


    _addPost() {
        const post = this._state.profilePage.posts
        post.push({
            id: ++post.length,
            message: this._state.profilePage.newPostText,
            likes: 0,
        })
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    _addMessage() {
        const messages = this._state.messagesPage.messages
        messages.push({
            id: ++messages.length,
            message: this._state.messagesPage.newMessageText,
            who: 'my',
        })
        this._state.messagesPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    _updateNewMessageText(newText) {
        this._state.messagesPage.newMessageText = newText
        this._callSubscriber(this._state)
    },
    dispatch(action) {

        if (action.type === ADD_POST) {
            this._addPost()
        }
        else if (action.type === UPDATE_POST_TEXT) {
            this._updateNewPostText(action.newText)
        }
        else if (action.type === ADD_MESSAGE) {
            this._addMessage()
        }
        else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._updateNewMessageText(action.newText)
        }
    },

}

export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updatePostTextActionCreator = (text) => ({
    type: UPDATE_POST_TEXT,
    newText: text
})

export const addMessageTextActionCreator = () => ({
    type:ADD_MESSAGE
})
export const updateMessageTextActionCreator = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    newText: text
})


export default store;
window.store = store