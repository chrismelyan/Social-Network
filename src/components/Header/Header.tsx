import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {ProfileResponseType} from "../../redux/profile-reducer";

type HeaderType = {
    isAuth: boolean
    login: string | null
    profile: ProfileResponseType | null
}

const Header = (props: HeaderType) => {

    return (
        <div className={s.header}>
            <img
                src='https://thumbs.dreamstime.com/b/something-like-aa-logo-letters-blue-red-gradation-114428171.jpg'
            alt={'logo'}
            />

            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? `Welcome, Chris`
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Header;