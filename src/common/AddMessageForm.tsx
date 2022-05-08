import React from 'react';
import {Field, Form, Formik} from "formik";
import a from './Textarea.module.css'
import s from './Button.module.css'

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
        props.sendMessage( values.newMessage );
    }

    return (
        <Formik
            initialValues = {initialValues}
            onSubmit={(values, {resetForm}) => {
                addNewMessage(values);
                resetForm({values: {newMessage: ''}})
            }}>
                <Form>
                        <Field
                            className={a.textarea}
                            name={'newMessage'}
                            id={'newMessage'}
                            as={'textarea'}
                            placeholder={'enter text'}
                        />
                    <div>
                    <button className={s.button} type={'submit'}>Send</button>
                    </div>
                </Form>
        </Formik>
    )
}

export default AddMessageForm;