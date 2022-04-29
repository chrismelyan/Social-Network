import {connect} from "react-redux";
import {
    UsersResponseType,
    UserType, getUsers, followUsers, unFollowUsers
} from "../../redux/users-reducer";
import {RootStateType} from "../../redux/store";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type MapDispatchToPropsType = {
    getUsers: (currentPage:number, pageSize: number) => void
    followUsers: (id: number) => void
    unFollowUsers: (id: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPIComponent extends React.Component<UsersPropsType, UsersResponseType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPage = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPage={this.onPage}
                followingInProgress={this.props.followingInProgress}
                followUsers={this.props.followUsers}
                unFollowUsers={this.props.unFollowUsers}
            />
        </>
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = withAuthRedirect(connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>
(mapStateToProps, {getUsers, followUsers, unFollowUsers})(UsersAPIComponent));