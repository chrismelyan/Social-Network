import React from 'react';
import s from './Users.module.css'
import axios, {AxiosResponse} from 'axios';
import userPhoto from '../../assets/images/user.png'
import {UsersResponseType, UserType} from "../../redux/users-reducer";


type PropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
const Users = (props: PropsType) => {

    // let getUsers = () => {
    if (props.users.length === 0) {
        axios.get<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`).then((response: AxiosResponse<UsersResponseType>) => {
            props.setUsers(response.data.items);
            props.setTotalUsersCount(response.data.totalCount);
        });
    }

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i < pageCount; i++) {
        pages.push(i)
    }

    const onPage = (pageNumber: number) => {
        props.setCurrentPage(pageNumber);
        axios.get<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`).then((response: AxiosResponse<UsersResponseType>) => {
            props.setUsers(response.data.items);
        });
    }


    return (
        <div>
            <div className={s.pageNumbers}>
                {
                    pages.map((page, index) => {
                        return <span key={index + 1} className={props.currentPage === page ? s.selectedPage : ''}
                                     onClick={(e) => {
                                         onPage(page)
                                     }}>{page}</span>
                    })
                }
            </div>
            {
                props.users.map(el => {
                    return <div key={el.id} className={s.user}>
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
                        </div>
                    </div>
                })
            };
        </div>
    );
}

export default Users;