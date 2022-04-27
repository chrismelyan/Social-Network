import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import male from '../../assets/images/male.png'
import email from '../../assets/images/email.png'
import music from '../../assets/images/music.png'
import settings from '../../assets/images/settings-gear.png'
import newspaper from '../../assets/images/newspaper.png'
import community from '../../assets/images/community.png'


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.navBlock}>
                <img src={male} alt={'user'} className={s.icon}/>
                <NavLink to={'/profile'} className={({ isActive }) => (isActive ? s.active : s.item)}>Profile</NavLink>
            </div>
            <div className={s.navBlock}>
                <img src={email} alt={'messages'} className={s.icon}/>
                <NavLink to={'/dialogues'} className={({ isActive }) => (isActive ? s.active : s.item)}>Messages</NavLink>
            </div>
            <div className={s.navBlock}>
                <img src={community} alt={'community'} className={s.icon}/>
                <NavLink to={'/users'} className={({ isActive }) => (isActive ? s.active : s.item)}>Users</NavLink>
            </div>
            <div className={s.navBlock}>
                <img src={newspaper} alt={'newspaper'} className={s.icon}/>
                <NavLink to={'/news'} className={({ isActive }) => (isActive ? s.active : s.item)}>News</NavLink>
            </div>
            <div className={s.navBlock}>
                <img src={music} alt={'music'} className={s.icon}/>
                <NavLink to={'/music'} className={({ isActive }) => (isActive ? s.active : s.item)}>Music</NavLink>
            </div>
            <div className={s.navBlock}>
                <img src={settings} alt={'settings'} className={s.icon}/>
                <NavLink to={'/settings'} className={({ isActive }) => (isActive ? s.active : s.item)}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;