import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ReduxStoreType} from "../../redux/reduxStore";
import {ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
    store: ReduxStoreType
}

const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                newMessageText={props.profilePage.newMessageText}
                posts={props.profilePage.posts}
                dispatch={props.store.dispatch.bind(props.store)}
            />
        </div>
    )
}

export default Profile;