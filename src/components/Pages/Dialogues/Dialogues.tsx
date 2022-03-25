import React, {ChangeEvent} from 'react';
import s from './Dialogues.module.css'
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import {DialoguesPageType} from "../../../redux/state";

type DialoguesPropsType = {
    dialoguesPage: DialoguesPageType
    newMessage: string
    updateDialoguesText: (value: string) => void
    sendMessage: () => void
}

const Dialogues = (props: DialoguesPropsType) => {

    let dialoguesElements = props.dialoguesPage.dialogues.map(d => <DialogueItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialoguesPage.messages.map(m => <Message message={m.message}/>);

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateDialoguesText(e.currentTarget.value)
    }
    const onClickHandler = () => {
        props.sendMessage()
    }

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={props.newMessage} onChange={onChangeHandler} placeholder={'Enter your text ...'}/></div>
                    <div><button onClick={onClickHandler}>send</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogues;