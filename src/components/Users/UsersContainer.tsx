import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {RootStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import UsersC from "./UsersC";

export type MapStateToPropsType = {
    users: UserType[]
}
export type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
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
        setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType> (mapStateToProps, mapDispatchToProps) (UsersC);