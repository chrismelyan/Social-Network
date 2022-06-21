import {DialoguesPageType, sendMessageAC} from "../../../redux/dialogues-reducer";
import Dialogues from "./Dialogues";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import React from "react";

type MapStateToPropsType = {
    dialoguesPage: DialoguesPageType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    sendMessage: (newMessage: string) => void
}
type DialoguesContainerType = MapDispatchToPropsType & MapStateToPropsType

const DialoguesContainer = (props: DialoguesContainerType ) => {
    return <Dialogues dialoguesPage={props.dialoguesPage} sendMessage={props.sendMessage} isAuth={props.isAuth}/>
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
export default compose<React.ComponentType>(withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))(DialoguesContainer);
