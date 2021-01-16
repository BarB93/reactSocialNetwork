import s from './Frend.module.css'
import {NavLink} from "react-router-dom";

const Frend = (props) => {

    return (
        <NavLink to={`/dialogs/${props.id}`} className={s.frend}>
            <img className={s.avatar} src={props.avatar} alt="avatar"/>
            <div>{props.name}</div>
        </NavLink>
    )
};

export default Frend