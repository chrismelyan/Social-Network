import React from 'react';
import {ErrorMessage, Field, FormikValues} from "formik";
import s from './Input.module.css'

const Password = (props: FormikValues) => {
    const {name, placeholder} = props
    return (
        <div className={s.inputBlock}>
            <Field name={name} id={name}>
                {({field, meta: {touched, error}}: FormikValues) => {
                    return <input className={`${s.input} ${touched && error ? s.invalid : ''}`}
                                  {...field}
                                  placeholder={placeholder}
                                  type={'password'}/>
                }}
            </Field>
            <ErrorMessage name={name}>
                {errorMessage => <div className={s.errorText}>{errorMessage}</div>}
            </ErrorMessage>
        </div>
    );
};

export default Password;