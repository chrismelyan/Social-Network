import React from 'react';
import {Formik, Form, Field, FormikValues, FormikHelpers, FormikProps} from 'formik';
import * as Yup from 'yup';
import s from './Login.module.css'
import a from '../../common/Button.module.css'
import FormControl from "../../common/FormControl";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/store";
import {Navigate} from "react-router-dom";

type InitialValuesType = {
    email: string
    password: string
    rememberMe: boolean
}
type LoginType = {
    login: (email: string, password: string, rememberMe: boolean, setStatus: (status?: any) => void) => void
    isAuth: boolean
}
type MapStateTotPropsType = {
    isAuth: boolean
}
const Login = (props: LoginType) => {
    const initialValues: InitialValuesType = {
        email: '',
        password: '',
        rememberMe: false
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Required').email('Invalid email format'),
        password: Yup.string().required('Required').min(5, 'Minimum 5 symbols'),
    })
    const onSubmit = (values: InitialValuesType, {setSubmitting, setStatus}: FormikHelpers<InitialValuesType>) => {
        props.login(values.email, values.password, values.rememberMe, setStatus)
        setSubmitting(false)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <div className={s.formContainer}>
            <h1>LOG IN</h1>
            <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    validateOnBlur
                    onSubmit={onSubmit}>
                {(formik: FormikProps<FormikValues>) => {
                    const {isSubmitting, status} = formik
                    return (
                        <Form>
                            <div>
                                <FormControl control={'input'} name={'email'} placeholder={'email'}/>
                            </div>
                            <div>
                                <FormControl control={'password'} name={'password'} placeholder={'password'}/>
                            </div>
                            <div style={{marginBottom: '8px'}}>
                                <Field type={'checkbox'} name={'rememberMe'} id={'rememberMe'}/>
                                <label htmlFor={'rememberMe'}>remember me</label>
                            </div>
                            <div>
                                <button className={a.button} type={'submit'} disabled={isSubmitting}>
                                    Login
                                </button>
                            </div>
                            {status
                                ? <span style={{color: 'red'}}>Your email or password is incorrect</span>
                                : <span style={{margin: '8px', width: '300px'}}></span>}
                        </Form>
                    )
                }}

            </Formik>
        </div>
    );
};

const mapStateToProps = (state: RootStateType): MapStateTotPropsType => {
    return {isAuth: state.auth.isAuth}
}
export default connect(mapStateToProps, {login})(Login);
