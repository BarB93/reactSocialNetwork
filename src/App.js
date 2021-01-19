import React from "react";
import './App.css';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Music from "./components/Music/Music.jsx";
import News from "./components/News/News";
import Aside from "./components/Aside/Aside";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from 'react-router-dom'




const App = (props) => {

    return (
                <div className="app-container">
                    <Header />
                    <Aside />
                    <div className="app-content">
                        <Route exact path='/profile' render={() => <Profile />}/>
                        <Route path='/dialogs' render={() => <DialogsContainer />}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/news' component={News}/>
                    </div>
                </div>

    );
}

export default App;
