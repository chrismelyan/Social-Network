import React from 'react';
import {ErrorMessage, Field} from "formik";
import s from './Input.module.css'

type PasswordFormType = {
    name: string
    placeholder: string
}
const Password = (props: PasswordFormType) => {
    const {name, placeholder} = props
    return (
        <div>
            <Field className={s.input} placeholder={placeholder} type={'password'} name={name} id={name}/>
            <div className={s.errorText}>
                <ErrorMessage name={name}/>
            </div>
        </div>
    );
};

export default Password;