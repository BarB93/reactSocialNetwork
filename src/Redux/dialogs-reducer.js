const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let initialStore = {
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
}

const dialogsReducer = (state = initialStore, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            return sendMessage()
        case UPDATE_MESSAGE_TEXT:
            return  updateNewMessageText(action.newText)
        default:
            return state
    }

    function sendMessage() {

        const message = {
            id: state.messages.length + 1,
            message: state.newMessageText,
            who: 'my',
        }

        return {
            ...state,
            messages: [...state.messages,message],
            newMessageText: ''
        }
    }
    function updateNewMessageText(newText) {
        return {
            ...state,
            newMessageText : newText
        }
    }
}

export const sendMessageTextActionCreator = () => ({
    type:SEND_MESSAGE
})
export const updateMessageTextActionCreator = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    newText: text
})

export default  dialogsReducer