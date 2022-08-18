import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileResponseType} from "../../../redux/profile-reducer";
import ProfileStatus from './ProfileStatus'
import Preloader from "../../../common/Preloader/Preloader";
import profilePhoto from '../../../assets/images/user.png';

type ProfileInfoType = {
    profile: ProfileResponseType | null
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
}

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto}: ProfileInfoType) => {
    if (!profile) {
        return <Preloader/>
    };

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files && e.currentTarget.files.length) {
            savePhoto(e.currentTarget.files[0]);
        }
    };

    return (
        <div>
            <div className={s.container}>
                <img className={s.backgroundPhoto}
                     src='https://images.pexels.com/photos/813465/pexels-photo-813465.jpeg?cs=srgb&dl=pexels-michael-spadoni-813465.jpg&fm=jpg'
                     alt={'background'}/>
                <div className={s.profilePhotoWrapper}>
                    <img className={s.profilePhoto} src={profile.photos.large ?? profilePhoto} alt={'profile'}/>
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                </div>
            </div>
            <div className={s.descriptionBlock}>
                <h1>{profile.fullName}</h1>
                <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;