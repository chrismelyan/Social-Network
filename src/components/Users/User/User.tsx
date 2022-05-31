import React from 'react';
import s from "./User.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user.png";
import {UserType} from "../../../redux/users-reducer";

type UserComponentType = {
    user: UserType
    followingInProgress: Array<number>
    unFollowUsers: (id: number) => void
    followUsers: (id: number) => void
}

const User = ({user, followingInProgress, followUsers, unFollowUsers}: UserComponentType) => {
    return (
        <div className={s.user}>
            <div className={s.avatar}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt={'avatar'}/>
                </NavLink>
                {user.followed
                    ? <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => unFollowUsers(user.id)}>unfollow</button>
                    : <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => followUsers(user.id)}>follow</button>
                }
            </div>
            <div className={s.userBlock}>
                        <span className={s.nameStatus}>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
            </div>
        </div>
    );
};

export default User;