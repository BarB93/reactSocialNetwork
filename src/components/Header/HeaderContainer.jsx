import React from 'react'
import {connect} from "react-redux";
import * as axios from "axios";
import Header from "./Header";
import {setIsFetching, setAuthUserData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        })
            .then(response => {

                if(response.data.resultCode === 0) {
                    this.props.setIsFetching(false)
                    let {id,login,email} = response.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })
    }

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

export default connect(mapStateToProps,{setAuthUserData, setIsFetching})(HeaderContainer)