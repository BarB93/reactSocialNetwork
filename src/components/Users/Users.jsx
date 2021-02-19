import React from 'react'
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";

let Users = (props) => {

    let users = props.users.map((u) => <User key={u.id}
                                             subscribe={props.subscribe}
                                             unsubscribe={props.unsubscribe}
                                             user={u}
                                             subscribingProgress={props.subscribingProgress}
    />)

    const pagination = <Paginator totalItemsCount={props.totalUsersCount}
                                  pageSize={props.pageSize}
                                  currentPage={props.currentPage}
                                  onPageChanged={props.onPageChanged}/>

    return (
        <div>
            {pagination}
            <div>
                <div>{users}</div>
            </div>
        </div>
    )
}

export default Users
