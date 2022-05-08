import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

type InitialValuesType = {
    login: string
    password: string
    rememberMe: boolean
}

const Login = () => {
    const initialValues: InitialValuesType = {
        login: '',
        password: '',
        rememberMe: false
    }
    const validationSchema = Yup.object({
        login: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
    })
    const onSubmit = (values: InitialValuesType) => {
        console.log(values)
    }

    return (
        <div>
            <h1>LOG IN</h1>
            <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                <Form>
                    <div>
                        <Field placeholder={'login'} type={'text'} name={'login'} id={'login'}/>
                        <div><ErrorMessage name={'login'}/></div>
                    </div>
                    <div>
                        <Field placeholder={'password'} type={'text'} name={'password'} id={'password'}/>
                        <div><ErrorMessage name={'password'}/></div>
                    </div>
                    <div>
                        <Field type={'checkbox'} name={'rememberMe'} id={'rememberMe'}/>
                        <label htmlFor={'rememberMe'}>remember me</label>
                    </div>
                    <div>
                        <button type={'submit'}>Login</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default Login;
