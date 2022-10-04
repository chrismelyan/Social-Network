const SEND_MESSAGE = 'SEND-MESSAGE';

export type DialoguesPageType = {
    dialogues: DialoguesType[]
    messages: MessagesType[]
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
        {id: 3, name: 'Robert'},
        {id: 4, name: 'Mary'},
        {id: 5, name: 'Zac'},
        {id: 6, name: 'Carey'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is it goin?'},
        {id: 3, message: 'Awesome!'}
    ]
}

const dialoguesReducer = (state: DialoguesPageType = initialDialogues,
                          action: DialoguesReducerActionType): DialoguesPageType => {
    switch(action.type) {
        case SEND_MESSAGE:
            return {...state, messages: [...state.messages, {id: 4, message: action.newDialogueText}]};
        default:
            return state;
    }
}
// ACTION TYPE
export type DialoguesReducerActionType = ReturnType<typeof sendMessageAC>;

// ACTION CREATORS
export const sendMessageAC = (newDialogueText: string) => ({type: SEND_MESSAGE, newDialogueText} as const)

export default dialoguesReducer;