import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/state";

type ProfileType = {
    store: StoreType
}

const Profile = (props: ProfileType) => {
    const state = props.store.getState();
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                newMessageText={state.newMessageText}
                posts={state.posts}
                dispatch={props.store.dispatch.bind(props.store)}
            />
        </div>
    )
}

export default Profile;