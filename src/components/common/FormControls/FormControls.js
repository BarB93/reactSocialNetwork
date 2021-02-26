import React from 'react'
import s from './FormControls.module.css'
import {Field} from "redux-form";

const FormControl = ({meta:{touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <span className={s.formControl + " " + (hasError && s.error)}>
            {children}
            {hasError && <span>{error}</span>}
        </span>
    )
}

export const Textarea = (props) => {

    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...props.input} {...restProps} /></FormControl>
}

export const Input = (props) => {

    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...props.input} {...restProps} /></FormControl>
}

export const createField = (name, component, validate, placeholder, props = {}) => <span><Field
                                                                                         name={name}
                                                                                         placeholder={placeholder}
                                                                                         component={component}
                                                                                         validate={validate} {...props}/> {props.text?props.text:''}</span>
