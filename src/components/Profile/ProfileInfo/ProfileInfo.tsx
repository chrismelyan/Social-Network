import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileResponseType} from "../../../redux/profile-reducer";
import ProfileStatus from './ProfileStatus'
import Preloader from "../../../common/Preloader/Preloader";

type ProfileInfoType = {
    profile: ProfileResponseType | null
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileInfo = ({profile, status, updateUserStatus}: ProfileInfoType) => {
    if(!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.container}>
                <img className={s.backgroundPhoto}
                    src='https://images.pexels.com/photos/813465/pexels-photo-813465.jpeg?cs=srgb&dl=pexels-michael-spadoni-813465.jpg&fm=jpg'
                    alt={'background'}/>
                <img className={s.profilePhoto} src={profile.photos.large} alt={'profile'}/>
            </div>
            <div className={s.descriptionBlock}>
                <h1>{profile.fullName}</h1>
                <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;