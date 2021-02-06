import React from 'react'
import {connect} from 'react-redux';
import {getUsers, setCurrentPage, subscribe, unsubscribe} from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p)
        this.props.getUsers(p, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   subscribingProgress={this.props.subscribingProgress}
                   onPageChanged={this.onPageChanged}
                   unsubscribe={this.props.unsubscribe}
                   subscribe={this.props.subscribe}
                   toggleSubscribingProgress={this.props.toggleSubscribingProgress}

            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        subscribingProgress: state.usersPage.subscribingProgress

    }
}


export default connect(mapStateToProps, {
    setCurrentPage, getUsers,
    subscribe, unsubscribe
})(UsersContainer)