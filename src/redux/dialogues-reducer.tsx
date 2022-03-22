import {ActionsTypes, DialoguesPageType} from "./state";

export const UPDATE_DIALOGUES_TEXT = 'UPDATE-DIALOGUES-TEXT';
export const SEND_MESSAGE = 'SEND-MESSAGE';

const dialoguesReducer = (state: DialoguesPageType, action: ActionsTypes) => {
    switch(action.type) {
        case UPDATE_DIALOGUES_TEXT:
            state.newDialogueText = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newDialogueText;
            state.newDialogueText = '';
            state.messages.push({id: 4, message: body});
            return state;
        default:
            return state;
    }
}

export const updateDialoguesTextAC = (body: string) => {
    return {
        type: UPDATE_DIALOGUES_TEXT,
        body: body
    } as const
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}


export default dialoguesReducer;