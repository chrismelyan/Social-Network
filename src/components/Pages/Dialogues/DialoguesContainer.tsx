import {DialoguesPageType, sendMessageAC, updateDialoguesTextAC} from "../../../redux/dialogues-reducer";
import Dialogues from "./Dialogues";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    newMessage: string
    dialoguesPage: DialoguesPageType
}
type MapDispatchToPropsType = {
    updateDialoguesText: (value: string) => void
    sendMessage: () => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        newMessage: state.dialoguesPage.newDialogueText,
        dialoguesPage: state.dialoguesPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateDialoguesText: (value: string) => {
            dispatch(updateDialoguesTextAC(value))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}
export const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues);