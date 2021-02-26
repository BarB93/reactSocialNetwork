import React from 'react'
import {connect} from "react-redux";
import Login from "./Login";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

class LoginContainer extends React.Component {

    render() {
        return this.props.isAuth? <Redirect to={'/profile'}/> : <Login captchaUrl={this.props.captchaUrl} login={this.props.login}/>
    }
}

const mapStateToProps = (state) => {
    return {
        captchaUrl:state.auth.captchaUrl,
        isAuth:state.auth.isAuth
    }
}

export default connect(mapStateToProps,{login})(LoginContainer)