import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.authorisationedUserId
        if(!userId) this.props.history.push('/login')
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)

    }

    render() {
        // console.log('render PROFILE')
        return (
            <Profile {...this.props} updateStatus={this.props.updateUserStatus}/>
        )
    }
}

let mapStateToProps = (state) => {
    // console.log('mapStateToProps PROFILE')
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorisationedUserId: state.auth.userId,
        isAuth: state.auth.isAuth

    }
}

export default compose(
    connect(mapStateToProps,{getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)