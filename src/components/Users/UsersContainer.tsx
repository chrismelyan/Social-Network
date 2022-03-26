import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UsersStateType, UserType} from "../../redux/users-reducer";
import {RootStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";

export type MapStateToPropsType = {
    users: UserType[]
}
export type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersStateType) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => dispatch(followAC(userID)),
        unfollow: (userID: number) => dispatch(unfollowAC(userID)),
        setUsers: (users: UsersStateType) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);