import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import {UserType} from "../../redux/users-reducer";

type PropsType = {
    onPage: (pageNumber: number) => void
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: Array<number>
    followUsers: (id: number) => void
    unFollowUsers: (id: number) => void
}

const Users: React.FC<PropsType> = props => {
    const {
        onPage,
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        followUsers,
        unFollowUsers
    } = props

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
        <div className={s.tabContainer}>
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
                                    onClick={() => unFollowUsers(el.id)}>unfollow</button>
                                : <button
                                    disabled={props.followingInProgress.some(id => id === el.id)}
                                    onClick={() => followUsers(el.id)}>follow</button>
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