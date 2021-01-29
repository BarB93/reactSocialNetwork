import React from 'react'
import s from "./Users.module.css";
import User from "./User/User";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for(let i = 1; i <= pagesCount; i++) {
        let classShow = i === 1 || i === pagesCount
        || i === props.currentPage
        || i === props.currentPage + 1
        || i === props.currentPage + 2
        || i === props.currentPage - 1
        || i === props.currentPage - 2
            ? s.show
            : ''

        let classActive = i === props.currentPage? s.active : ''
        let classFirstBtn = i === 1? s.firstBtn:''
        let classLastBtn = i === 1? s.lastBtn:''

        pages.push(<button onClick={() => props.onPageChanged(i)} className={`${s.buttonPage} ${classShow} ${classActive} ${classFirstBtn} ${classLastBtn}`}>{i}</button>)
    }



    let users = props.users.map((u) => <User key={u.id} id={u.id} subscribe={props.subscribe}
                                                  unsubscribe={props.unsubscribe} user={u}/>)


    return (
        <div>
            <div className={s.buttons}>
                {pages}
            </div>
            <div>
                {/*<button className={s.get_users} onClick={this.getUsers}>Получить список людей</button>*/}
                <div>{users}</div>
                <div className={s.wrapper}>
                    <button className={s.button}>Показать еще</button>
                </div>
            </div>
        </div>
    )
}

export default Users
