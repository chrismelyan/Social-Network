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

export type AppType = {
    state: StateType
}
export type StateType = {
    posts: Array<PostsType>
    dialogues: Array<ChatType>
    messages: Array<MessagesType>
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ChatType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/profile'} element={
                            <Profile posts={props.state.posts}
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
        </BrowserRouter>
    );
}

export default App;