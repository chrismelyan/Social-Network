import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostsType>
    value: string
    onAddPost: (value: string) => void
    onChangeText: (text: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let postElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

    let onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeText(e.currentTarget.value)
    }

    let addPost = () => {
        props.onAddPost(props.value)
        // newPostElement.current.value = ''
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.value}
                        onChange={onChangeText}/>
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