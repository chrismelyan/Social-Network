import React, {Suspense} from 'react';
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
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialoguesContainer = React.lazy(() => import("./components/Pages/Dialogues/DialoguesContainer"));

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
                        <Route path={'/profile'} element={withSuspense(ProfileContainer)}>
                            <Route path={':userId'}  element={withSuspense(ProfileContainer)}/>
                        </Route>
                        <Route path={'/dialogues'} element={withSuspense(DialoguesContainer)}>
                            <Route path={':id'} element={withSuspense(DialoguesContainer)}
                            />
                        </Route>
                        <Route path={'/users'} element={<UsersContainer/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                        <Route path={'/login'} element={<Login/>}/>
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