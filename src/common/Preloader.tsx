import React from 'react';
import preloader from "../assets/images/preloader.gif";
import s from "../components/Users/Users.module.css";

const Preloader = () => {
    return (
        <div>
            <img src={preloader} className={s.loader} alt={'preloader'}/>
        </div>
    );
};

export default Preloader;