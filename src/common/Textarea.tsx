import React from 'react';
import {ErrorMessage, Field} from "formik";
import a from './Textarea.module.css'

type TextareaType = {
    name: string
    placeholder: string
    error?: boolean
}
const Textarea = (props: TextareaType) => {
    const {name, placeholder, error} = props
    const TextareaStyle = `${error ? a.error : ''} ${a.textarea}`
    return (
        <div>
            <Field
                className={TextareaStyle}
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