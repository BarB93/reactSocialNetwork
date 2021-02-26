import React from "react";
import './App.css';
import Music from "./components/Music/Music.jsx";
import News from "./components/News/News";
import Aside from "./components/Aside/Aside";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom'
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/redux-store";

class App extends React.Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert('Some error occured')
        console.error((promiseRejectionEvent))
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className="app-container">
                <HeaderContainer/>
                <Aside/>
                <div className="app-content">
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to="/profile" />}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/login' render={() => <LoginContainer/>}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/news' component={News}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => ({initialized: state.app.initialized})

const AppContainer = compose(withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)

const SamuraiApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>)
}


export default SamuraiApp