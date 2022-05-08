import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../redux/profile-reducer";
import AddPostForm from "../../../common/AddPostForm";


type MyPostsType = {
    posts: Array<PostsType>
    onAddPost: (value: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let postElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

    let addPost = (newPost: string) => {
        props.onAddPost(newPost)
    }

    return (
        <div className={s.postsBlock}>
            <h3 style={{color: '#8c91b6'}}>My posts</h3>
            <div>
                <AddPostForm addPost={addPost}/>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
}

export default MyPosts;