import React from 'react';
import {Formik, Form, Field} from 'formik';
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
    login: (email: string, password: string, rememberMe: boolean) => void
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
        email: Yup.string().required('Required'),
        password: Yup.string().required('Required').min(8, 'Minimum 8 symbols'),
    })
    const onSubmit = (values: InitialValuesType) => {
        props.login(values.email, values.password, values.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <div className={s.formContainer}>
            <h1>LOG IN</h1>
            <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                <Form>
                    <div>
                        <FormControl control={'input'} name={'email'} placeholder={'email'}/>
                    </div>
                    <div>
                        <FormControl control={'password'} name={'password'} placeholder={'password'}/>
                    </div>
                    <div>
                        <Field type={'checkbox'} name={'rememberMe'} id={'rememberMe'}/>
                        <label htmlFor={'rememberMe'}>remember me</label>
                    </div>
                    <div>
                        <button className={a.button} type={'submit'}>Login</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

const mapStateToProps = (state: RootStateType): MapStateTotPropsType => {
    return {isAuth: state.auth.isAuth}
}
export default connect(mapStateToProps, {login})(Login);
