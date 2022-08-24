import React, {lazy} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom';
import Music from "./components/Pages/Music/Music";
import News from "./components/Pages/News/News";
import Settings from "./components/Pages/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "./components/Profile/ComponentWithRouterProps";
import {initializeApp} from "./redux/app-reducer";
import {RootStateType} from "./redux/store";
import Preloader from "./common/Preloader/Preloader";
import withSuspense from "./hoc/withSuspense";

// import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));
const DialoguesContainer = lazy(() => import("./components/Pages/Dialogues/DialoguesContainer"));

const SuspendedProfile = withSuspense(ProfileContainer);
const SuspendedDialogues = withSuspense(DialoguesContainer);

type MapDispatchToPropsType = {
    initializeApp: () => void
}
type MapStateToPropsType = {
    initialized: boolean
}
type AppType = MapDispatchToPropsType & MapStateToPropsType

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/'} element={<SuspendedProfile/>}/>
                        <Route path={'profile'} element={<SuspendedProfile/>}>
                            <Route path={':userId'}  element={<SuspendedProfile/>}/>
                        </Route>
                        <Route path={'dialogues'} element={<SuspendedDialogues/>}>
                            <Route path={':id'} element={<SuspendedDialogues/>}
                            />
                        </Route>
                        <Route path={'users'} element={<UsersContainer/>}/>
                        <Route path={'music'} element={<Music/>}/>
                        <Route path={'news'} element={<News/>}/>
                        <Route path={'settings'} element={<Settings/>}/>
                        <Route path={'login'} element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);