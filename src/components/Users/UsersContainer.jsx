import React from 'react'
import {connect} from "react-redux";
import {
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    subscribeAC,
    unsubscribeAC
} from "../../Redux/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userSubscribe:(userId) => {dispatch(subscribeAC(userId))},
        userUnsubscribe:(userId) => {dispatch(unsubscribeAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (num) => {dispatch(setCurrentPageAC(num))},
        setTotalUsersCount: (totalUsersCount) => {dispatch(setTotalUsersCountAC(totalUsersCount))}
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersAPIComponent)

export default  UsersContainer