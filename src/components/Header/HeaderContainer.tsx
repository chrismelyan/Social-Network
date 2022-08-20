import React from 'react';
import Header from "./Header";
import {AuthResponseType, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {ProfileType} from "../../redux/profile-reducer";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
    profile: ProfileType | null
}
type MapDispatchToPropsType = {
    logout: () => void
}
type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component <HeaderContainerType, AuthResponseType> {
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profile: state.profilePage.profile
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>
(mapStateToProps, {logout})(HeaderContainer);