import s from './Message.module.css'

const Message = function (props) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message