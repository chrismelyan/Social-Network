import React from 'react';
import s from './Users.module.css'
import axios, {AxiosResponse} from 'axios';
import userPhoto from '../../assets/images/user.png'
import {UsersResponseType} from "../../redux/users-reducer";
import {UsersPropsType} from "./UsersContainer";


const Users = (props: UsersPropsType) => {
    // let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response: AxiosResponse<UsersResponseType>) => {
                props.setUsers(response.data.items);
            });
        }

    console.log(props.users)
    return (
        <div>
            {/*<button onClick={getUsers}>Get Users</button>*/}
            {
                props.users.map(el => <div key={el.id} className={s.user}>
                    <div className={s.avatar}>
                        <img src={el.photos.small !== null ? el.photos.small : userPhoto} alt={'avatar'}/>
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
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                        <span className={s.location}>
                            {/*<div>{'el.location.country'}</div>*/}
                            {/*<div>{'el.location.city'}</div>*/}
                        </span>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Users;