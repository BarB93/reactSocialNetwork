import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const Dialog = function (props) {
    const avatar = props.avatar || 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png'

    return (
        <div className={s.dialog}>

            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>
                <img className={`global_avatar ${s.avatar}`} src={avatar} alt="Avatar"/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default Dialog