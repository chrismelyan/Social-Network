import React from 'react';
import s from './Dialogues.module.css'
import {NavLink} from "react-router-dom";


const Dialogues = () => {
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                <div className={s.chat + ' ' + s.active}>
                    <NavLink to={'/dialogues/1'}>Chris</NavLink>
                </div>
                <div className={s.chat}>
                    <NavLink to={'/dialogues/2'}>Kristen</NavLink>
                </div>
                <div className={s.chat}>
                    <NavLink to={'/dialogues/3'}>Victor</NavLink>
                </div>
                <div className={s.chat}>
                    <NavLink to={'/dialogues/4'}>Mary</NavLink>
                </div>
                <div className={s.chat}>
                    <NavLink to={'/dialogues/5'}>Zac</NavLink>
                </div>
                <div className={s.chat}>
                    <NavLink to={'/dialogues/6'}>Carey</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How is it goin?</div>
                <div className={s.message}>Awesome man!</div>
            </div>
        </div>
    );
};

export default Dialogues;