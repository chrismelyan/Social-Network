import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderType = {
    isAuth: boolean
    login: string | null
}

const Header = (props: HeaderType) => {
    return (
        <div className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs4QqypbHrFtRuXnFgMcW2taWhb3mtHRHr8w&usqp=CAU'
            alt={'logo'}
            />

            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? "Chris"
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Header;