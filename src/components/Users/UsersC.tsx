import React from 'react';
import s from './Users.module.css'
import axios, {AxiosResponse} from 'axios';
import userPhoto from '../../assets/images/user.png'
import {UsersResponseType, UserType} from "../../redux/users-reducer";


export type UsersCType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

class Users extends React.Component<UsersCType, UsersResponseType> {

    // constructor(props: UsersCType) {
    //     super(props)
    // }

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response: AxiosResponse<UsersResponseType>) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        }
    }
    onPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response: AxiosResponse<UsersResponseType>) => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                    <div className={s.pageNumbers}>
                        {
                            pages.map((p, index) => {
                                return <span key={index+1} className={this.props.currentPage === p ? s.selectedPage : ''}
                                onClick={(e) => {this.onPage(p)}}>{p}</span>
                            }
                        )
                        }
                    </div>
                {
                    this.props.users.map(el => <div key={el.id} className={s.user}>
                        <div className={s.avatar}>
                            <img src={el.photos.small !== null ? el.photos.small : userPhoto} alt={'avatar'}/>
                            {el.followed
                                ? <button
                                    onClick={() => this.props.unfollow(el.id)}>
                                    unfollow
                                </button>
                                : <button
                                    onClick={() => this.props.follow(el.id)}>
                                    follow
                                </button>
                            }
                        </div>
                        <div className={s.userBlock}>
                        <span className={s.nameStatus}>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                        {/*    <span className={s.location}>*/}
                        {/*    <div>{'el.location.country'}</div>*/}
                        {/*    <div>{'el.location.city'}</div>*/}
                        {/*</span>*/}
                        </div>
                    </div>)
                }
            </div>
        );
    };
}

export default Users;