import React from 'react';
import s from "./User.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user.png";
import {UserType} from "../../../redux/users-reducer";
import b from '../../../common/Button/Button.module.css'

type UserComponentType = {
    user: UserType
    followingInProgress: Array<number>
    unFollowUsers: (id: number) => void
    followUsers: (id: number) => void
}

const User = ({user, followingInProgress, followUsers, unFollowUsers}: UserComponentType) => {
    const userName = (name: string) => {
        if (name.length > 12) {
            let newName = name.slice(0, 12)
            return newName + '...';
        }
        return name;
    }

    return (
        <div className={s.user}>
            <div className={s.avatar}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt={'avatar'}/>
                </NavLink>
                <div className={s.userName}>
                    {userName(user.name)}
                </div>
                {user.followed
                    ? <button
                        className={b.button}
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => unFollowUsers(user.id)}>unfollow</button>
                    : <button
                        className={b.button}
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => followUsers(user.id)}>follow</button>
                }
            </div>
        </div>
    );
};

export default User;