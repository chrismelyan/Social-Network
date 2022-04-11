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
                <img src='https://image.shutterstock.com/image-photo/cattle-ranch-below-dallas-divide-260nw-1016018500.jpg' alt={'background'}/>
            </div>
            <h1>{props.profile?.fullName}</h1>
            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos.large} alt={'profile'}/>
                <div>About me: {props.profile?.aboutMe}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;