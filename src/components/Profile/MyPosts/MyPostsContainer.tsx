import React from 'react';
import {addPostAC, changeTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";


const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let onChangeText = (text: string) => {
                store.dispatch(changeTextAC(text))
            }

            let onAddPost = (value: string) => {
                store.dispatch(addPostAC(value))
                // newPostElement.current.value = ''
            }
            return <MyPosts
                posts={store.getState().profilePage.posts}
                value={store.getState().profilePage.newMessageText}
                onAddPost={onAddPost}
                onChangeText={onChangeText}
            />
        }
        }
    </StoreContext.Consumer>
}

export default MyPostsContainer;