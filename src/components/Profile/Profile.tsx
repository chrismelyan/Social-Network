import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileResponseType} from "../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import AboutMe from './AboutMe';

type ProfileType = {
    profile: ProfileResponseType | null
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
}

const Profile = (props: ProfileType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
            />
            <hr/>
            <AboutMe aboutMe={props.profile.aboutMe}/>
            <hr/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;