import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Route, Routes} from 'react-router-dom';
import Music from "./components/Pages/Music/Music";
import News from "./components/Pages/News/News";
import Settings from "./components/Pages/Settings/Settings";
import {DialoguesContainer} from "./components/Pages/Dialogues/DialoguesContainer";
import {UsersContainer} from "./components/Users/UsersContainer";


function App() {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/profile'} element={<ProfileContainer/>}>
                        <Route path={':userId'} element={<ProfileContainer/>}
                        />
                    </Route>
                    <Route path={'/dialogues'} element={<DialoguesContainer/>}>
                        <Route path={':id'} element={<DialoguesContainer/>}
                        />
                    </Route>
                    <Route path={'/users'} element={<UsersContainer/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;