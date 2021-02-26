import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId || this.props.authorisationedUserId
        if(!userId) this.props.history.push('/login')
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(this.props.match.params.userId != prevProps.match.params.userId) this.refreshProfile()
    }

    render() {
        return (
            <Profile {...this.props}  updateStatus={this.props.updateUserStatus} isOwner={!this.props.match.params.userId}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorisationedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps,{getUserProfile, getUserStatus, savePhoto , updateUserStatus, saveProfile}),
    withRouter
)(ProfileContainer)