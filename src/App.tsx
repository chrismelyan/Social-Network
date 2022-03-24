import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Pages/Dialogues/Dialogues";
import {Route, Routes} from 'react-router-dom';
import Music from "./components/Pages/Music/Music";
import News from "./components/Pages/News/News";
import Settings from "./components/Pages/Settings/Settings";
import {ReduxStoreType} from "./redux/reduxStore";


type AppType = {
    store: ReduxStoreType
}
function App(props: AppType) {
    const state = props.store.getState()

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/profile'} element={
                            <Profile
                                profilePage={state.profilePage}
                                store={props.store}
                            />
                        }
                        />
                        <Route path={'/dialogues'} element={
                                <Dialogues
                                    dialoguesPage={state.dialoguesPage}
                                    store={props.store}
                                />
                            }
                        >
                        <Route path={':id'} element={
                            <Dialogues
                                dialoguesPage={state.dialoguesPage}
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