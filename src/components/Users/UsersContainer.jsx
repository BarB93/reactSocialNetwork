import React from 'react'
import {connect} from "react-redux";
import {setUsersAC, subscribeAC, unsubscribeAC} from "../../Redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userSubscribe:(userId) => {dispatch(subscribeAC(userId))},
        userUnsubscribe:(userId) => {dispatch(unsubscribeAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))}
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default  UsersContainer