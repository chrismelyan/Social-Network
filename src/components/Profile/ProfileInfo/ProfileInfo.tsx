import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileResponseType} from "../../../redux/profile-reducer";
import ProfileStatus from './ProfileStatus'
import Preloader from "../../../common/Preloader";

type ProfileInfoType = {
    profile: ProfileResponseType | null
}

const ProfileInfo = (props: ProfileInfoType) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.backgroundPhoto}
                    src='https://images.pexels.com/photos/813465/pexels-photo-813465.jpeg?cs=srgb&dl=pexels-michael-spadoni-813465.jpg&fm=jpg'
                    alt={'background'}/>
                <img className={s.profilePhoto} src={props.profile.photos.large} alt={'profile'}/>
            </div>
            <div className={s.descriptionBlock}>
                <h1>{props.profile.fullName}</h1>
                <ProfileStatus status={props.profile.aboutMe}/>
            </div>
        </div>
    );
};

export default ProfileInfo;