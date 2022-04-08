import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import {UserType} from "../../redux/users-reducer";


type PropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPage: (pageNumber: number) => void
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
const Users: React.FC<PropsType> = props => {
    const {
        follow,
        unfollow,
        onPage,
        users,
        pageSize,
        totalUsersCount,
        currentPage
    } = props

    let pageCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i < pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={s.pageNumbers}>
                {
                    pages.map((page, index) => {
                        return <span key={index + 1} className={currentPage === page ? s.selectedPage : ''}
                                     onClick={(e) => {
                                         onPage(page)
                                     }}>{page}</span>
                    })
                }
            </div>
            {
                users.map(el => {
                    return <div key={el.id} className={s.user}>
                        <div className={s.avatar}>
                            <img src={el.photos.small !== null ? el.photos.small : userPhoto} alt={'avatar'}/>
                            {el.followed
                                ? <button
                                    onClick={() => unfollow(el.id)}>
                                    unfollow
                                </button>
                                : <button
                                    onClick={() => follow(el.id)}>
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
            }
        </div>
    );
}

export default Users;