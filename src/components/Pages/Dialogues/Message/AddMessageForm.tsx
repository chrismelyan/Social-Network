import React from 'react';
import {Form, Formik} from "formik";
import s from '../../../../common/Button.module.css'
import FormControl from "../../../../common/FormControl";
import * as Yup from "yup";

type AddMessageFormType = {
    sendMessage: (values: string) => void
}
type InitialValuesType = {
    newMessage: string
}

const AddMessageForm = (props: AddMessageFormType) => {
    const initialValues: InitialValuesType = {
        newMessage: ''
    }
    let addNewMessage = (values: InitialValuesType) => {
        props.sendMessage(values.newMessage);
    }
    const validationSchema = Yup.object({
        newMessage: Yup.string().max(3000, `The message is too long`).required('required')
    })

    return (
        <div>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, {resetForm}) => {
                addNewMessage(values);
                resetForm({values: {newMessage: ''}})
            }}>
            <Form>
                <FormControl control={'textarea'} name={'newMessage'} placeholder={"add a message ..."}/>
                <button className={s.button} type={'submit'}>Send</button>
            </Form>
        </Formik>
        </div>
    )
}

export default AddMessageForm;