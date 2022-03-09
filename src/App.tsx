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
import {RootStateType} from "./redux/state";

export type AppType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    changeText: (newText: string) => void
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
                                message={props.state.newMessageText}
                                posts={props.state.posts}
                                addPost={props.addPost}
                                changeTextCallback={props.changeText}
                            />
                        }
                        />
                        <Route path={'/dialogues'} element={
                                <Dialogues
                                    dialogues={props.state.dialogues}
                                    messages={props.state.messages}
                                />
                            }
                        >
                        <Route path={':id'} element={
                            <Dialogues
                                dialogues={props.state.dialogues}
                                messages={props.state.messages}
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