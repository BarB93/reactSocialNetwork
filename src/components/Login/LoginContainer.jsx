import React from 'react'
import {connect} from "react-redux";
import Login from "./Login";
import {postAuthentication} from "../../Redux/auth-reducer";

class LoginContainer extends React.Component {

    render() {
        return <Login postAuthentication={this.props.postAuthentication}/>
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps,{postAuthentication})(LoginContainer)