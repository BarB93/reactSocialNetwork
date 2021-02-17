import React from 'react'
import s from './FormControls.module.css'
import {Field} from "redux-form";

const FormControl = ({input, meta:{touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <span className={s.formControl + " " + (hasError && s.error)}>
            {children}
            {hasError && <span>{error}</span>}
        </span>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...props.input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...props.input} {...restProps} /></FormControl>
}

export const createField = (name, type, component, validate, placeholder, props = {}) => <div><Field type={type}
                                                                                         name={name}
                                                                                         placeholder={placeholder}
                                                                                         component={component}
                                                                                         validate={validate} {...props}/> {props.text?props.text:''}</div>
