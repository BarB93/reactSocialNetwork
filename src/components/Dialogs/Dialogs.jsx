import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";



const Dialogs = function (props) {

    let dialogsElements = props.state.dialogs.map(dialog => <Dialog name={dialog.name} avatar={dialog.avatar} key={dialog.id} id={dialog.id} />)
    let messageElements = props.state.messages.map(message => <Message key={message.id} state={message}/>)

    let newMessage = React.createRef()

    const sendMessage = () => {
        props.sendMessage()
    }

    const onMessageChange = () => {
        const text = newMessage.current.value;
        props.updateMessageText(text)

    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <div className={s.textarea}>
                        <textarea ref={newMessage} onChange={onMessageChange} value={props.state.newMessageText}  placeholder='Введите сообщение' cols="30" rows="5"/>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Отправить</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs
