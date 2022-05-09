import React from 'react';
import {ErrorMessage, Field, FormikValues} from "formik";
import a from './Textarea.module.css'
import s from "./Input.module.css";

const Textarea = (props: FormikValues) => {
    const {name, placeholder} = props
    return (
        <div className={s.textareaBlock}>
            <Field
                className={a.textarea}
                name={name}
                id={name}
                as={'textarea'}
                placeholder={placeholder}
            />
            <div className={a.errorText}>
                <ErrorMessage name={name}/>
            </div>
        </div>
    );
};

export default Textarea;