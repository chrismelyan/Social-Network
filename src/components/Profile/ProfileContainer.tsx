import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile, getUserStatus, PhotosType,
    ProfilePageType,
    ProfileType, savePhoto, updateUserStatus
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
    profile: ProfileType | null
    isAuth: boolean
    status: string
    authorizedUserId: number | null
    photos: PhotosType
}
export type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    savePhoto: (photo: File) => void
}
type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerType, ProfilePageType> {
    refreshProfile() {
        const {authorizedUserId, router, getUserProfile, getUserStatus} = this.props;
        let userId = router.params.userId;
        if (!userId) {
            userId = authorizedUserId;
            if(!userId) {
                router.history.push('/login');
            }
        }
        if (userId) {
            getUserProfile(userId);
            getUserStatus(userId);
        }
    };

    componentDidMount() {
        this.refreshProfile();
    };

    componentDidUpdate(prevProps: ProfileContainerType) {
        if (this.props.router.params.userId != prevProps.router.params.userId)
            this.refreshProfile();
    };

    render() {
        return (
            <Profile
                {...this.props}
                savePhoto={this.props.savePhoto}
                photos={this.props.photos}
                isOwner={!this.props.router.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
            />
        )
    };
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    photos: state.profilePage.photos
})

export default compose<React.ComponentType>(withAuthRedirect, withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>
    (mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto}))(ProfileContainer);