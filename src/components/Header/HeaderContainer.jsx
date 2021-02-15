import React from 'react'
import {connect} from "react-redux";
import Header from "./Header";
import {logout} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps,{logout})(HeaderContainer)