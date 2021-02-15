import React from "react";
import './App.css';
import Music from "./components/Music/Music.jsx";
import News from "./components/News/News";
import Aside from "./components/Aside/Aside";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route, withRouter} from 'react-router-dom'
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {

        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized) return <Preloader />
        return (
            <div className="app-container">
                <HeaderContainer/>
                <Aside/>
                <div className="app-content">
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => ({initialized: state.app.initialized})

export default compose(withRouter,
                        connect(mapStateToProps,{initializeApp})
                    )(App)
