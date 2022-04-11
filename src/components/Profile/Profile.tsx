import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {PostsType, ProfileResponseType} from "../../redux/profile-reducer";
import Preloader from "../../common/Preloader";

type ProfileType = {
    // addPostAC: (postMessage: string) => void
    // changeTextAC: (newText: string) => void
    // setUserProfile: (profile: ProfileResponseType) => void
    // posts: PostsType[]
    // newMessageText: string
    profile: ProfileResponseType | null
}

const Profile = (props: ProfileType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;