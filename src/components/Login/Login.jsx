import React from 'react'
import s from '../common/FormControls/FormControls.module.css'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('email','text',Input,[required],'Email')}
            {createField('password','password',Input,[required],'Пароль')}
            {createField('rememberMe','checkbox',Input,null, null, {text:'запомнить меня'})}
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div><button>войти</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login}) => {
    const onSubmit = (formData) => {
            const email = formData.email
            const password = formData.password
            const rememberMe = formData.rememberMe ? true:false

            login(email, password, rememberMe)


    }

    return (
        <div>
            <h1>Авторизация</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login