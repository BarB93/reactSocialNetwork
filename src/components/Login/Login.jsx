import React from 'react'
import s from '../common/FormControls/FormControls.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field type='text' name={'email'} placeholder={'Логин'} component={Input} validate={[required]}/></div>
            <div><Field type='password' name={'password'} placeholder={'Пороль'} component={Input} validate={[required]}/></div>
            <div><Field type="checkbox" name={'rememberMe'} component={Input}/> запомнить меня</div>
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div><button>войти</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
            const email = formData.email
            const password = formData.password
            const rememberMe = formData.rememberMe ? true:false

            props.login(email, password, rememberMe)


    }

    return (
        <div>
            <h1>Авторизация</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login