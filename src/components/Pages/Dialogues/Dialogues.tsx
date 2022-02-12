import React from 'react';
import s from './Dialogues.module.css'
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import {ChatType, MessagesType} from "../../../App";

type DialoguesType = {
    dialogues: Array<ChatType>
    messages: Array<MessagesType>
}

const Dialogues = (props: DialoguesType) => {

    let dialoguesElements = props.dialogues.map (d => <DialogueItem name={d.name} id={d.id} />);

    let messagesElements = props.messages.map (m => <Message message={m.message}/>);

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogues;