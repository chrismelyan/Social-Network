export const UPDATE_DIALOGUES_TEXT = 'UPDATE-DIALOGUES-TEXT';
export const SEND_MESSAGE = 'SEND-MESSAGE';

export type DialoguesPageType = {
    dialogues: DialoguesType[]
    messages: MessagesType[]
    newDialogueText: string
}
export type MessagesType = {
    id: number
    message: string
}
export type DialoguesType = {
    id: number
    name: string
}

const initialDialogues: DialoguesPageType = {
    dialogues: [
        {id: 1, name: 'Chris'},
        {id: 2, name: 'Kristen'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Mary'},
        {id: 5, name: 'Zac'},
        {id: 6, name: 'Carey'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is it goin?'},
        {id: 3, message: 'Awesome!'}
    ],
    newDialogueText: ''
}

const dialoguesReducer = (state = initialDialogues,
                          action: DialoguesReducerActionType): DialoguesPageType => {
    switch(action.type) {
        case UPDATE_DIALOGUES_TEXT:
            return {
                ...state,
                newDialogueText: action.body
            };
        case SEND_MESSAGE:
            let body = state.newDialogueText;
            return {
                ...state,
                newDialogueText: '',
                messages: [...state.messages, {id: 4, message: body}]
            };
        default:
            return state;
    }
}

export type DialoguesReducerActionType = ReturnType<typeof updateDialoguesTextAC> | ReturnType<typeof sendMessageAC>;

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