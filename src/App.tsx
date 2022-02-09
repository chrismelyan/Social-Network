import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Pages/Dialogues/Dialogues";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Music from "./components/Pages/Music/Music";
import News from "./components/Pages/News/News";
import Settings from "./components/Pages/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/dialogues'} element={<Dialogues/>}/>
                        <Route path={'/profile'} element={<Profile/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
