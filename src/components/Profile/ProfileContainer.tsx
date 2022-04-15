import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    ProfilePageType,
    ProfileResponseType,
    setUserProfile
} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/store";
import {withRouter} from "./ComponentWithRouterProps";
import {RouteComponentProps} from "@reach/router";
import {showProfile} from "../../api/api";

type PathParamsType = {
    router: any
}

type MapStateToPropsType = {
    profile: ProfileResponseType | null
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileResponseType) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerType, ProfilePageType>{

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 23093
        }
        showProfile(userId).then((data) => {
                this.props.setUserProfile(data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile

})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>
(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));