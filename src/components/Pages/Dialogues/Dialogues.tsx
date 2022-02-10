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
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                <DialogueItem name={dialogueData[0].name} id={dialogueData[0].id} />
                <DialogueItem name={dialogueData[1].name} id={dialogueData[1].id} />
                <DialogueItem name={dialogueData[2].name} id={dialogueData[2].id} />
                {/*<DialogueItem name={'Mary'} id={4} />*/}
                {/*<DialogueItem name={'Zac'} id={5} />*/}
                {/*<DialogueItem name={'Carey'} id={6} />*/}
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
            </div>
        </div>
    );
};

export default Dialogues;