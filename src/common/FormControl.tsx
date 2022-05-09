import React from 'react';
import Textarea from "./Textarea";
import Input from "./Input";
import Password from "./Password";

type FormControlType = {
    control: string
    name: string
    placeholder: string
    error?: boolean
}
const FormControl = (props: FormControlType) => {
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