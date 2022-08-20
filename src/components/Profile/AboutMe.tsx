import React from 'react';
import {ContactsType, ProfileType} from "../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import s from './Profile.module.css';
import Contact from "./Contact";

type AboutMeType = {
    profile: ProfileType | null
}

const AboutMe = ({profile}: AboutMeType) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.aboutMeBlock}>
            <h1>About me</h1>
            <div>
                <div>
                    <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
                </div>
                {profile.lookingForAJob &&
                    <div>
                        <b>My professional skills:</b> {profile.lookingForAJobDescription}
                    </div>
                }
                <div>
                    <b>About me:</b> {profile.aboutMe}
                </div>
                <div>
                    <b>Contacts:</b> {Object.keys(profile.contacts).map(c => {
                        return <Contact
                            key={c}
                            contactTitle={c}
                            contactValue={profile.contacts[c as keyof ContactsType]}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;