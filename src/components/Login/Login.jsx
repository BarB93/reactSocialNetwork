import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    console.log('Rerender')
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field type='text' name={'login'} placeholder={'Логин'} component={Input} validate={[required]}/></div>
            <div><Field type='password' name={'password'} placeholder={'Пороль'} component={Input} validate={[required]}/></div>
            <div><Field type="checkbox" name={'rememberMe'} component={Input}/> запомнить меня</div>
            <div><button type={'submit'}>войти</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        //beta
        if(formData.login && formData.password){
            props.postAuthentication(formData.login,formData.password, formData.rememberMe ? true:false)
        }

    }

    return (
        <div>
            <h1>Авторизация</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login