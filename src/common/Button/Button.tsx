import React from 'react';
import s from './Button.module.css'

type ButtonType = {
    title: string
    callback: () => void
}

const Button = ({title, callback}: ButtonType) => {
    return (
        <div>
            <button onClick={callback} className={s.button}>{title}</button>
        </div>
    );
};

export default Button;