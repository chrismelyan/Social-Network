import React from 'react';
import {ErrorMessage, Field} from "formik";
import s from './Input.module.css'

type InputFormType = {
    name: string
    placeholder: string
}
const Input = (props: InputFormType) => {
    const {name, placeholder} = props
    return (
        <div>
            <Field className={s.input} placeholder={placeholder} type={'text'} name={name} id={name}/>
            <div className={s.errorText}>
                <ErrorMessage name={name}/>
            </div>
        </div>
    );
};

export default Input;