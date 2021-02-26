import React from "react";
import s from "./User.module.css"
import userFoto from "../../../accets/img/avatar.webp"
import {NavLink} from "react-router-dom";


const User = (props) => {

    return (
        <div className={s.user}>
            <div className={s.left_block}>
                <NavLink to={'/profile/' + props.user.id}>
                    <img className={`global_avatar ${s.avatar}`}
                         src={props.user.photos.small ? props.user.photos.small : userFoto}/>
                </NavLink>
                <div>
                    {
                        props.user.followed
                            ? <button disabled={props.subscribingProgress.some(id => id === props.user.id)}
                                      className={s.button}
                                      onClick={() => {
                                          props.unsubscribe(props.user.id)
                                      }}>Отписаться</button>

                            : <button disabled={props.subscribingProgress.some(id => id === props.user.id)}
                                      className={s.button}
                                      onClick={() => {
                                          props.subscribe(props.user.id)
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