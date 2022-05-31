import {connect} from "react-redux";
import {
    UsersResponseType,
    UserType, getUsers, followUsers, unFollowUsers
} from "../../redux/users-reducer";
import {RootStateType} from "../../redux/store";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getUsersSelector,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/users-selectors";

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

class UsersContainer extends React.Component<UsersPropsType, UsersResponseType> {
    componentDidMount() {
        const {currentPage, pageSize, getUsers} = this.props;
        getUsers(currentPage, pageSize);
    }
    onPage = (pageNumber: number) => {
        const {pageSize, getUsers} = this.props;
        getUsers(pageNumber, pageSize);
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
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
export default compose<React.ComponentType>(withAuthRedirect, connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>
(mapStateToProps, {getUsers, followUsers, unFollowUsers}))(UsersContainer);