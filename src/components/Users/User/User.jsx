import React from "react";
import s from "./User.module.css"
import userFoto from "../../../accets/img/avatar.webp"

const User = (props) => {
    
    return (
        <div className={s.user}>
            <div className={s.left_block}>
                <img className={`global_avatar ${s.avatar}`} src={props.user.photos.small?props.user.photos.small: userFoto}/>
                <div>
                   {
                        props.user.isSubscribe
                        ? <button  className={s.button} onClick={() => {
                            props.unsubscribe(props.id)
                        }}>Отписаться</button>
                        : <button className={s.button}  onClick={() => {
                            props.subscribe(props.id)
                        }}>Подписаться</button>
                    }
                </div>
            </div>
            <div className={s.user_info_wrapper}>
                <div className={s.user_info}>
                    <div className={s.user_info_start}>
                        <div className={s.user_name}>{`${props.user.name}`}</div>
                        <div className={s.user_status}>{props.user.status}</div>
                    </div>
                    <div className={s.location}>
                        <div>{'props.user.location.country'},</div>
                        <div>{'props.user.location.city'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User