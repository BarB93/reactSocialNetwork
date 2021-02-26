import React from 'react'
import s from '../common/FormControls/FormControls.module.css'
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {createField('email', Input, [required], 'Email')}
            </div>
            <div>
                {createField('password', Input, [required], 'Пароль', {type: 'password'})}
            </div>
            <div>
                {createField('rememberMe', Input, null, null, {text: 'запомнить меня', type: 'checkbox'})}
            </div>
            {captchaUrl && <div className={s.captcha_wrapper}>
                <h4 className={s.captcha_title}>Введите каптчу:</h4>
                <img src={captchaUrl} alt="captcha"/>
                <div>
                    {createField('captcha', Input, [required], 'captcha')}
                </div>
            </div>}
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <button>войти</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, captchaUrl}) => {
    const onSubmit = (formData) => {
        const email = formData.email
        const password = formData.password
        const rememberMe = formData.rememberMe ? true : false
        const captcha = formData.captcha ? formData.captcha : null

        login(email, password, rememberMe, captcha)

    }

    return (
        <div>
            <h1>Авторизация</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}

export default Login