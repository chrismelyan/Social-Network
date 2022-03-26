import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";

const Users = (props: UsersPropsType) => {
    return (
        <div>
            {
                props.users.map(el => <div key={el.id} className={s.user}>
                    <div className={s.avatar}>
                        <img src={el.photoUrl} alt={'avatar'}/>
                        {el.followed
                            ? <button
                                onClick={() => props.unfollow(el.id)}>
                                unfollow
                            </button>
                            : <button
                                onClick={() => props.follow(el.id)}>
                                follow
                            </button>
                        }
                    </div>
                    <div className={s.userBlock}>
                        <span className={s.nameStatus}>
                            <div>{el.fullName}</div>
                            <div>{el.status}</div>
                        </span>
                        <span className={s.location}>
                            <div>{el.location.country}</div>
                            <div>{el.location.city}</div>
                        </span>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Users;