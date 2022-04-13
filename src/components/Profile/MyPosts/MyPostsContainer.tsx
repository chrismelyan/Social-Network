import {addPostAC, changeTextAC, PostsType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    posts: PostsType[],
    value: string
}
type MapDispatchToPropsType = {
    onChangeText: (text: string) => void
    onAddPost: (value: string) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        value: state.profilePage.newMessageText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onChangeText: (text: string) => {
            dispatch(changeTextAC(text))
        },
        onAddPost: (value: string) => {
            dispatch(addPostAC(value))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);