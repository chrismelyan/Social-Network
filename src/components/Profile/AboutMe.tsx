import React from 'react';

type AboutMeType = {
    aboutMe: string
}

const AboutMe = (props: AboutMeType) => {
    return (
        <div>
            <h1>About me</h1>
            <p>{props.aboutMe}</p>
        </div>
    );
};

export default AboutMe;