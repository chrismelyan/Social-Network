import React from 'react';
import s from './Dialogues.module.css'
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import {DialoguesPageType} from "../../../redux/dialogues-reducer";
import {Navigate} from "react-router-dom";
import AddMessageForm from "./Message/AddMessageForm";

type DialoguesPropsType = {
    dialoguesPage: DialoguesPageType
    sendMessage: (newMessage: string) => void
    isAuth: boolean
}

const Dialogues = (props: DialoguesPropsType) => {

    let dialoguesElements = props.dialoguesPage.dialogues.map(d => <DialogueItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.dialoguesPage.messages.map(m => <Message key={m.id} message={m.message}/>);

    const addNewMessage = (newMessage: string) => {
        props.sendMessage(newMessage)
    }

    if (!props.isAuth) return <Navigate to={'/login'}/>;
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={s.messageBlock}>
                <div className={s.messages}>
                    <div className={s.item}>{messagesElements}</div>
                </div>
                <AddMessageForm sendMessage={addNewMessage}/>
            </div>
        </div>
    );
};

export default Dialogues;