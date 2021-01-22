import React from 'react'
import s from './Users.module.css'
import User from "./User/User"
import * as axios from "axios";


const Users = (props) => {

    if(props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {

                    let arr = response.data.items

                    props.setUsers(arr)

                })

    }

    const users = props.users.map((u) => <User key={u.id} id={u.id} subscribe={props.userSubscribe}
                                               unsubscribe={props.userUnsubscribe} user={u}/>)

    return (
        <div>
            <div>{users}</div>
            <div className={s.wrapper}>
                <button className={s.button}>Показать еще</button>
            </div>
        </div>
    )
}

export default Users
