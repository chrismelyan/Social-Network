import React from 'react';
import s from './Dialogues.module.css'
import DialogueItem from "./DialogueItem";
import Message from "./Message";


const Dialogues = () => {
    const dialogueData = [
        {id: 1, name: 'Chris'},
        {id: 2, name: 'Kristen'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Mary'},
        {id: 5, name: 'Zac'},
        {id: 6, name: 'Carey'}
    ]

    const messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is it goin?'},
        {id: 3, message: 'Awesome!'}
    ]
    let dialoguesElements = dialogueData.map (d => <DialogueItem name={d.name} id={d.id} />);

    let messagesElements = messageData.map (m => <Message message={m.message}/>);

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