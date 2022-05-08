import React from 'react';
import {ErrorMessage, Field} from "formik";

type InputFormType = {
    name: string
    placeholder: string
}
const Input = (props: InputFormType) => {
    const {name, placeholder} = props
    return (
        <div>
            <Field placeholder={placeholder} type={'text'} name={name} id={name}/>
            <div><ErrorMessage name={name}/></div>
        </div>
    );
};

export default Input;