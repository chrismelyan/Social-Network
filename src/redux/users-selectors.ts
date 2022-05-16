import {RootStateType} from "./store";
import {createSelector} from "reselect";
import {UserType} from "./users-reducer";

const getUsers = (state: RootStateType) => {
    return state.usersPage.users;
}
export const getUsersSelector = createSelector(getUsers, (users: UserType[]) => {
    return users.filter(user => true)
})
export const getPageSize = (state: RootStateType) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state: RootStateType) => {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state: RootStateType) => {
    return state.usersPage.currentPage;
}
export const getIsFetching = (state: RootStateType) => {
    return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state: RootStateType) => {
    return state.usersPage.followingInProgress;
}