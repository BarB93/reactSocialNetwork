import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLength15, required} from "../../utils/validators/validators";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field className={s.textarea} name='newMessageBody' component={Textarea} placeholder='Введите сообщение' cols="30" rows="5" validate={[required,maxLength15]}/></div>
            <div><button>Отправить</button></div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)

const Dialogs = function (props) {
    let dialogsElements = props.state.dialogs.map(dialog => <Dialog name={dialog.name} avatar={dialog.avatar} key={dialog.id} id={dialog.id} />)
    let messageElements = props.state.messages.map(message => <Message key={message.id} state={message}/>)


    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}

export default Dialogs
