import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import asideReducer from "./aside-reducer";



const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Привет, как дела?', likes: 6,},
                {id: 2, message: 'учу реакт', likes: 23},
                {id: 3, message: 'вообще сил много', likes: 17},
            ],

            newPostText: ''
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

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage,action)
        this._state.aside = asideReducer(this._state.aside,action)

        this._callSubscriber(this._state)
    },

}

export default store;
window.store = store