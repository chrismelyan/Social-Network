import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://image.shutterstock.com/image-photo/cattle-ranch-below-dallas-divide-260nw-1016018500.jpg'/>
            </div>
            <div>
                ava + discription
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;