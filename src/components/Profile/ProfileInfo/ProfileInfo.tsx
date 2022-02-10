import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://image.shutterstock.com/image-photo/cattle-ranch-below-dallas-divide-260nw-1016018500.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + discription
            </div>
        </div>
    );
};

export default ProfileInfo;