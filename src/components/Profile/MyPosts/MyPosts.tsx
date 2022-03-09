import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
    message: string
    changeTextCallback: (title: string) => void
}

const MyPosts = (props: MyPostsType) => {
    let postElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

    let addPost = () => {
        props.addPost(props.message)
        // newPostElement.current.value = ''
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.message}
                        onChange={(e) => props.changeTextCallback(e.currentTarget.value)}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
}

export default MyPosts;