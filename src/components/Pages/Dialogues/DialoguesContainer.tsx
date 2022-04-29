import {DialoguesPageType, sendMessageAC, updateDialoguesTextAC} from "../../../redux/dialogues-reducer";
import Dialogues from "./Dialogues";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    newMessage: string
    dialoguesPage: DialoguesPageType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    updateDialoguesText: (value: string) => void
    sendMessage: () => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        newMessage: state.dialoguesPage.newDialogueText,
        dialoguesPage: state.dialoguesPage,
        isAuth: state.auth.isAuth
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
export const DialoguesContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogues));
