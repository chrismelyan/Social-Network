import React from 'react';
import {addPostAC, changeTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ReduxStoreType} from "../../../redux/reduxStore";

type MyPostsContainerType = {
    store: ReduxStoreType
}

const MyPostsContainer = (props: MyPostsContainerType) => {
    const state = props.store.getState();

    let onChangeText = (text: string) => {
        props.store.dispatch(changeTextAC(text))
    }

    let onAddPost = (value: string) => {
        props.store.dispatch(addPostAC(value))
        // newPostElement.current.value = ''
    }

    return (
        <MyPosts
            posts={state.profilePage.posts}
            value={state.profilePage.newMessageText}
            onAddPost={onAddPost}
            onChangeText={onChangeText}
        />
    );
}

export default MyPostsContainer;