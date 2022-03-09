import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";

type ProfileType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
    message: string
    changeTextCallback: (title: string) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                message={props.message}
                posts={props.posts}
                addPost={props.addPost}
                changeTextCallback={props.changeTextCallback}/>
        </div>
    )
}

export default Profile;