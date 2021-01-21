import s from './Message.module.css'

const Message = function (props) {

    let classMy = props.state.who === 'my'? s.my: s.not_my;
    return (
        <div className={`${s.message} ${classMy}`}>{props.state.message}</div>
    )
}

export default Message