import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = function (props) {

    let dialogsElements = props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} />)
    let messageElements = props.state.messages[0].messages.map(message => <Message message={message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs
