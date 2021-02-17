import React from 'react'
import {connect} from 'react-redux';
import {requestUsers, subscribe, unsubscribe} from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getSubscribingProgress,
    getTotalUsersCount, getUsers,

} from "../../Redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (p) => {
        const {pageSize} = this.props
        this.props.requestUsers(p, pageSize)
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        subscribingProgress: getSubscribingProgress(state)
    }
}



export default compose(
    connect(mapStateToProps, {requestUsers, subscribe, unsubscribe
    }),
)(UsersContainer)