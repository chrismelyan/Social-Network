import React from 'react';
import s from './Button.module.css'

type ButtonType = {
    title: string
    callback: () => void
}

const Button = (props: ButtonType) => {
    return (
        <div>
            <button onClick={props.callback} className={s.button}>{props.title}</button>
        </div>
    );
};

export default Button;