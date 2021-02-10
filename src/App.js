import React from "react";
import './App.css';

import Music from "./components/Music/Music.jsx";
import News from "./components/News/News";
import Aside from "./components/Aside/Aside";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from 'react-router-dom'
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import LoginContainer from "./components/Login/LoginContainer";

const App = (props) => {

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

export default App;
