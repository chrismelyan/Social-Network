import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ReduxStoreType} from "../../redux/reduxStore";

type ProfileType = {
    store: ReduxStoreType
}

const Profile = (props: ProfileType) => {
    const state = props.store.getState();
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                newMessageText={state.profilePage.newMessageText}
                posts={state.profilePage.posts}
                dispatch={props.store.dispatch.bind(props.store)}
            />
        </div>
    )
}

export default Profile;