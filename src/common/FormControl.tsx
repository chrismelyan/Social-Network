import React from 'react';
import Textarea from "./Textarea";
import Input from "./Input";
import Password from "./Password";
import {FormikValues} from "formik";

const FormControl = (props: FormikValues) => {
    const {control, ...rest} = props
    switch(control) {
        case 'input':
            return <Input {...rest}/>
        case 'textarea':
            return <Textarea {...rest}/>
        case 'password':
            return <Password {...rest}/>
        default:
            return null
    }
}

export default FormControl;