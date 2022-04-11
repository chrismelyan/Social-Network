import React from 'react';
import Profile from "./Profile";
import axios, {AxiosResponse} from "axios";
import {connect} from "react-redux";
import {
    ProfilePageType,
    ProfileResponseType,
    setUserProfile
} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/reduxStore";
import {withRouter} from "./ComponentWithRouterProps";
import {RouteComponentProps} from "@reach/router";

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
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response: AxiosResponse<ProfileResponseType>) => {
                this.props.setUserProfile(response.data);
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