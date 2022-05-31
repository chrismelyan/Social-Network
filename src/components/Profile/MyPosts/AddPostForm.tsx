import React from 'react';
import {Form, Formik} from "formik";
import s from "../../../common/Button/Button.module.css";
import FormControl from "../../../common/FormControl/FormControl";
import * as Yup from "yup";

type AddPostFormType = {
    addPost: (values: string) => void
}
type InitialValuesType = {
    newPost: string
}

const AddPostForm = (props: AddPostFormType) => {
    const initialValues: InitialValuesType = {
        newPost: ''
    }
    let addNewMessage = (values: InitialValuesType) => {
        props.addPost(values.newPost);
    }
    const validationSchema = Yup.object({
        newPost: Yup.string().required('Required').max(200, `Maximum 200 symbols`)
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, {resetForm}) => {
                addNewMessage(values);
                resetForm({values: {newPost: ''}})
            }}>
            <Form>
                <FormControl control={'textarea'}
                             name={'newPost'}
                             placeholder={"add a post here"}
                />
                <div>
                    <button className={s.button} type={'submit'}>Post</button>
                </div>
            </Form>
        </Formik>
    );
}

export default AddPostForm;