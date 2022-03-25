import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from 'react-router-dom';
import Music from "./components/Pages/Music/Music";
import News from "./components/Pages/News/News";
import Settings from "./components/Pages/Settings/Settings";
import {ReduxStoreType} from "./redux/reduxStore";
import DialoguesContainer from "./components/Pages/Dialogues/DialoguesContainer";


type AppType = {
    store: ReduxStoreType
}
function App(props: AppType) {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/profile'} element={
                            <Profile
                                store={props.store}
                            />
                        }
                        />
                        <Route path={'/dialogues'} element={
                                <DialoguesContainer
                                    store={props.store}
                                />
                            }
                        >
                        <Route path={':id'} element={
                            <DialoguesContainer
                                store={props.store}
                            />
                        }/>
                        </Route>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;