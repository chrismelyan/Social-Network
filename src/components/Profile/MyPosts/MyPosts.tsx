import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: "Hi, how are you?", likesCount: 34},
        {id: 1, message: "It's my first post", likesCount: 14}
    ]
    let postElement = postData.map(p => <Post message={p.message} likesCount={p.likesCount} />);
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
}

export default MyPosts;