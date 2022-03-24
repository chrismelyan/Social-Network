import React, {ChangeEvent} from 'react';
import s from './Dialogues.module.css'
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import {sendMessageAC, updateDialoguesTextAC} from "../../../redux/dialogues-reducer";
import {DialoguesPageType} from "../../../redux/state";
import {ReduxStoreType} from "../../../redux/reduxStore";

type DialoguesPropsType = {
    dialoguesPage: DialoguesPageType
    store: ReduxStoreType
}

const Dialogues = (props: DialoguesPropsType) => {

    let dialoguesElements = props.dialoguesPage.dialogues.map(d => <DialogueItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialoguesPage.messages.map(m => <Message message={m.message}/>);
    let newMessage = props.dialoguesPage.newDialogueText;

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.store.dispatch(updateDialoguesTextAC(body))
    }
    const onClickHandler = () => {
        props.store.dispatch(sendMessageAC())
    }

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessage} onChange={onChangeHandler} placeholder={'Enter your text ...'}/></div>
                    <div><button onClick={onClickHandler}>send</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogues;