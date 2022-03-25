import React from 'react';
import {sendMessageAC, updateDialoguesTextAC} from "../../../redux/dialogues-reducer";
import Dialogues from "./Dialogues";
import {StoreContext} from "../../../StoreContext";


const DialoguesContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            const updateDialoguesText = (value: string) => {
                store.dispatch(updateDialoguesTextAC(value))
            }
            const sendMessage = () => {
                store.dispatch(sendMessageAC())
            }
            let newMessage = store.getState().dialoguesPage.newDialogueText;
            return <Dialogues
                dialoguesPage={store.getState().dialoguesPage}
                updateDialoguesText={updateDialoguesText}
                sendMessage={sendMessage}
                newMessage={newMessage}
            />
        }}
    </StoreContext.Consumer>
};

export default DialoguesContainer;