import React, {ComponentType} from 'react';
import {Navigate} from "react-router-dom";
import {RootStateType} from "../redux/store";
import {connect} from "react-redux";
import {MapDispatchToPropsType} from "../components/Profile/ProfileContainer";

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: RootStateType): MapStateToPropsForRedirectType  => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect <T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStateToPropsForRedirectType) {
        let {isAuth, ...RestProps} = props;

        if (!props.isAuth) return <Navigate to={'/login'}/>
        return <Component {...RestProps as T}/>
    }

    let ConnectedAuthRedirectComponent = connect<MapStateToPropsForRedirectType,
        MapDispatchToPropsType,
        {}, RootStateType>
    (mapStateToPropsForRedirect)
    (RedirectComponent)

    return ConnectedAuthRedirectComponent;
};
