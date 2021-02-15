import React from 'react'
import s from './FormControls.module.css'

const FormControl = ({input, meta, child,...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <span className={s.formControl + " " + (hasError && s.error)}>
            {props.children}
            {hasError && <span>{meta.error}</span>}
        </span>
    )
}

export const Textarea = (props) => {
    const {input, meta, child,...restProps} = props
    return <FormControl {...props}><textarea {...props.input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child,...restProps} = props
    return <FormControl {...props}><input {...props.input} {...restProps} /></FormControl>
}