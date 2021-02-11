const SEND_MESSAGE = 'SEND-MESSAGE'

let initialStore = {
    dialogs: [
        {id: 1, name: 'Борис Б',avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png'},
        {id: 2, name: 'Натали Б',avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png'},
        {id: 3, name: 'Лариса',avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png'},
        {id: 4, name: 'Андрей',avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png'},
        {id: 5, name: 'Макс',avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png'},
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

}

const dialogsReducer = (state = initialStore, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            return sendMessage(action.newMessage)
        default:
            return state
    }

    function sendMessage(newMessage) {

        const message = {
            id: state.messages.length + 1,
            message: newMessage,
            who: 'my',
        }

        return {
            ...state,
            messages: [...state.messages,message],
            newMessageText: ''
        }
    }

}

export const sendMessageTextActionCreator = (newMessage) => ({
    type:SEND_MESSAGE,
    newMessage
})

export default  dialogsReducer