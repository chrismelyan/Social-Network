import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs4QqypbHrFtRuXnFgMcW2taWhb3mtHRHr8w&usqp=CAU' />
        </div>
    );
};

export default Header;