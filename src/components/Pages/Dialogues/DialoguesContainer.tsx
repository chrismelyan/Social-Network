import React from 'react';
import {sendMessageAC, updateDialoguesTextAC} from "../../../redux/dialogues-reducer";
import {ReduxStoreType} from "../../../redux/reduxStore";
import Dialogues from "./Dialogues";

type DialoguesContainerType = {
    store: ReduxStoreType
}

const DialoguesContainer = (props: DialoguesContainerType) => {
    const state = props.store.getState()

    let newMessage = state.dialoguesPage.newDialogueText;

    const updateDialoguesText = (value: string) => {
        props.store.dispatch(updateDialoguesTextAC(value))
    }
    const sendMessage = () => {
        props.store.dispatch(sendMessageAC())
    }

    return (
        <Dialogues
            dialoguesPage={state.dialoguesPage}
            updateDialoguesText={updateDialoguesText}
            sendMessage={sendMessage}
            newMessage={newMessage}
        />
    );
};

export default DialoguesContainer;