import React from 'react';
import s from './Users.module.css'
import {UserType} from "../../redux/users-reducer";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User/User";

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
        followingInProgress,
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        followUsers,
        unFollowUsers
    } = props

    return (
        <div className={s.tabContainer}>
            <div className={s.usersWrapper}>
            {
                users.map(el => {
                    return <User
                        key={el.id}
                        user={el}
                        unFollowUsers={unFollowUsers}
                        followingInProgress={followingInProgress}
                        followUsers={followUsers}
                    />
                })
            }
            </div>
            <div className={s.paginator}>
            <Paginator
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                callbackOnPage={onPage}
                portionSize={10}
            />
            </div>
        </div>
    );
}

export default Users;