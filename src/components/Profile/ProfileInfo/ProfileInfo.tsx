import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileResponseType} from "../../../redux/profile-reducer";

type ProfileInfoType = {
    profile: ProfileResponseType | null
}

const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div>
            <div>
                <img className={s.backgroundPhoto}
                    src='https://images.pexels.com/photos/813465/pexels-photo-813465.jpeg?cs=srgb&dl=pexels-michael-spadoni-813465.jpg&fm=jpg'
                    alt={'background'}/>
                <img className={s.profilePhoto} src={props.profile?.photos.small} alt={'profile'}/>
            </div>
            <div className={s.descriptionBlock}>
                <h1>{props.profile?.fullName}</h1>
                <div>About me: {props.profile?.aboutMe}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;