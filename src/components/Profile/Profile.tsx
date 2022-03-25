import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ReduxStoreType} from "../../redux/reduxStore";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {
    store: ReduxStoreType
}

const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    )
}

export default Profile;