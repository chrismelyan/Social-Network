import React from 'react';
import Header from "./Header";
import {AuthResponseType, getAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {ProfileResponseType} from "../../redux/profile-reducer";


type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
    profile: ProfileResponseType | null
}

type MapDispatchToPropsType = {
    getAuthUserData: () => void
}

type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component <HeaderContainerType, AuthResponseType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

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
(mapStateToProps, {getAuthUserData})(HeaderContainer);