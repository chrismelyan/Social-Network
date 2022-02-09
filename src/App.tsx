import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                    <Route path={'/dialogues'} element={<Dialogues />} />
                    <Route path={'/profile'} element={<Profile />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
