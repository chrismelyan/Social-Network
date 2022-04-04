import React from 'react';
import s from './Users.module.css'
import axios, {AxiosResponse} from 'axios';
import userPhoto from '../../assets/images/user.png'
import {UsersResponseType, UserType} from "../../redux/users-reducer";


type PropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    users: UserType[]
}
const Users = (props: PropsType) => {

    // let getUsers = () => {
        if (props.users.length === 0) {
            axios.get<UsersResponseType>('https://social-network.samuraijs.com/api/1.0/users').then((response: AxiosResponse<UsersResponseType>) => {
                props.setUsers(response.data.items);
            });
        }

    return <div>
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
                            <div>{'el.location.country'}</div>
                            <div>{'el.location.city'}</div>
                        </span>
                    </div>
                </div>)
            }
        </div>
};

export default Users;