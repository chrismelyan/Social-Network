import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    ProfilePageType,
    ProfileResponseType
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
}
export type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerType, ProfilePageType>{

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 23093
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
let mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(withAuthRedirect, withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>
(mapStateToProps, {getUserProfile}))(ProfileContainer);