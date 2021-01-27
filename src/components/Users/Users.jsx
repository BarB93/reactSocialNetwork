import React from 'react'
import s from './Users.module.css'
import User from "./User/User"
import * as axios from "axios";

class Users extends React.Component {

    getUsers = () => {
        console.log('length',this.props.users.length)
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {

                    let arr = response.data.items
                    this.props.setUsers(arr)

                })

        }
    }

    render() {
       let users = this.props.users.map((u) => <User key={u.id} id={u.id} subscribe={this.props.userSubscribe}
                                                  unsubscribe={this.props.userUnsubscribe} user={u}/>)
        return <div>
            <button onClick={this.getUsers}>Получить список людей</button>
            <div>{users}</div>
            <div className={s.wrapper}>
                <button className={s.button}>Показать еще</button>
            </div>
        </div>
    }
}

export default Users
