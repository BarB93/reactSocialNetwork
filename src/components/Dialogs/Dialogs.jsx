import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMessageTextActionCreator, updateMessageTextActionCreator} from "../../Redux/store";

const Dialogs = function (props) {

    let dialogsElements = props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} />)
    let messageElements = props.state.messages.map(message => <Message state={message}/>)

    let newMessage = React.createRef()

    const addMessage = () => {
       props.dispatch(addMessageTextActionCreator())
    }

    const onMessageChange = () => {
        const text = newMessage.current.value
        props.dispatch(updateMessageTextActionCreator(text))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <div>
                        <textarea ref={newMessage} onChange={onMessageChange} value={props.state.newMessageText} cols="30" rows="5"/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Отправить</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs
