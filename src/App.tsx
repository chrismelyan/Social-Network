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

type AppType = {
    state: StateType
}
export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}
export type MessagePageType = {
    dialogueData: DialogueDataType
    messageData: MessageDataType
}
export type ProfilePageType = {
    postData: PostDataType
}
export type PostDataType = {
    posts: Array<PostsType>
}
export type DialogueDataType = {
    dialogues: Array<ChatType>
}
export type MessageDataType = {
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
                        <Route
                            path={'/dialogues/:id'}
                            element={
                                <Dialogues
                                    dialogues={props.state.messagePage.dialogueData.dialogues}
                                    messages={props.state.messagePage.messageData.messages}
                                />
                            }
                        />
                        <Route
                            path={'/profile'}
                            element={
                                <Profile posts={props.state.profilePage.postData.posts}
                                />
                            }
                        />
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