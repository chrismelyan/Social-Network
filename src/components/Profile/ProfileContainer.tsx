import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile, getUserStatus,
    ProfilePageType,
    ProfileResponseType, updateUserStatus
} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/store";
import {withRouter} from "./ComponentWithRouterProps";
import {RouteComponentProps} from "@reach/router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    router: any
}
type MapStateToPropsType = {
    profile: ProfileResponseType | null
    isAuth: boolean
    status: string
    authorizedUserId: number | null
}
export type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void

}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerType, ProfilePageType> {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
            />
        )
    }
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id
})

export default compose<React.ComponentType>(withAuthRedirect, withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>
    (mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}))(ProfileContainer);