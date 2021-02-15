import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

    let h1 = document.createElement('h1')


    setInterval(() => {
        store.dispatch({type:'FAKE'})
    },1000)

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.querySelector('#root')
    )







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
