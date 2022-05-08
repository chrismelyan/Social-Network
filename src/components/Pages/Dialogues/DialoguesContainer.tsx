import {DialoguesPageType, sendMessageAC} from "../../../redux/dialogues-reducer";
import Dialogues from "./Dialogues";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {ComponentType} from "react";

type MapStateToPropsType = {
    dialoguesPage: DialoguesPageType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    sendMessage: (newMessage: string) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialoguesPage: state.dialoguesPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newDialogueText: string) => {
            dispatch(sendMessageAC(newDialogueText))
        }
    }
}
export const DialoguesContainer = compose<ComponentType>(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogues);
