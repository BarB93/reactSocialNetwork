import React from 'react'
import s from './Users.module.css'

import * as axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`)
            .then(response => {
                let arr = response.data.items
                this.props.setUsers(arr)
            })
    }

    render() {
        return <Users currentPage={this.props.currentPage}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      onPageChanged={this.onPageChanged}
                      unsubscribe={this.props.userUnsubscribe}
                      subscribe={this.props.userSubscribe}
                      users={this.props.users}/>
    }
}

export default UsersAPIComponent
