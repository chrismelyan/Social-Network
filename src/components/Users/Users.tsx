import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import {UserType} from "../../redux/users-reducer";
import {unFollowUsers, followUsers} from "../../api/api";

type PropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPage: (pageNumber: number) => void
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    toggleIsFollowingProgress: (isFetching:boolean, userId: number) => void
    followingInProgress: Array<number>
}

const Users: React.FC<PropsType> = props => {
    const {
        follow,
        unfollow,
        onPage,
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        toggleIsFollowingProgress
    } = props

    // let pageCount = Math.ceil(totalUsersCount / pageSize);
    // let pages = [];
    // for (let i = 1; i < pageCount; i++) {
    //     pages.push(i)
    // }

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pagesForPagination = [];
    if (currentPage > 10 && pagesCount - currentPage > 10) {
        for (let i = currentPage - 10; i<=currentPage + 10; i++)
            pagesForPagination.push(i)
    } else if (0 < currentPage && currentPage<=10) {
        for (let i = 1; i<=20; i++)
            pagesForPagination.push(i)
    } else if (pagesCount - currentPage <= 10 ) {
        for (let i = pagesCount - 20; i<=pagesCount; i++)
            pagesForPagination.push(i)
    }

    return (
        <div>
            <div className={s.pageNumbers}>
                {
                    pagesForPagination.map((page, index) => {
                        return <span key={index + 1} className={currentPage === page ? s.selectedPage : ''}
                                     onClick={(e) => {
                                         onPage(page)
                                     }}> {page} </span>
                    })
                }
            </div>
            {
                users.map(el => {
                    return <div key={el.id} className={s.user}>
                        <div className={s.avatar}>
                            <NavLink to={'/profile/' + el.id}>
                            <img src={el.photos.small !== null ? el.photos.small : userPhoto} alt={'avatar'}/>
                            </NavLink>
                            {el.followed
                                ? <button
                                    disabled={props.followingInProgress.some(id => id === el.id)}
                                    onClick={() => {
                                        toggleIsFollowingProgress(true, el.id)
                                        unFollowUsers(el.id).then((data) => {
                                                if (data.resultCode === 0) {
                                                unfollow(el.id);
                                                }
                                            toggleIsFollowingProgress(false, el.id)
                                        });
                                    }}>unfollow</button>
                                : <button
                                    disabled={props.followingInProgress.some(id => id === el.id)}
                                    onClick={() => {
                                    toggleIsFollowingProgress(true, el.id)
                                    followUsers(el.id).then((data) => {
                                            if (data.resultCode === 0) {
                                                follow(el.id);
                                            }
                                            toggleIsFollowingProgress(false, el.id);
                                    });
                                }}>follow</button>
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
            }
        </div>
    );
}

export default Users;