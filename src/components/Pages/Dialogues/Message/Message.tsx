import React from 'react';
import s from "./Message.module.css";
import avatar from '../../../../assets/images/user.png';

type MessageType = {
    message: string
}
const Message = (props: MessageType) => {
    const hour = new Date().getHours();
    const getMinutes = () => {
        let minute = new Date().getMinutes()
        if (minute < 10) {
            return '0' + minute
        } else {
            return minute
        }
    }
    const minutes = getMinutes()

    return (
        <div className={s.message}>
            <img src={avatar} alt={'avatar'} className={s.avatar}/>

            <div className={s.angle}/>

            <div className={s.bubble}>
                <div className={s.text}>{props.message}</div>
            </div>
            <div className={s.time}>{`${hour}:${minutes}`}</div>
        </div>
    );
};

export default Message;