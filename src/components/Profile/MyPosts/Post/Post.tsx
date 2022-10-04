import React from 'react';
import s from './Post.module.css';
import userImg from '../../../../assets/images/user.png'
import like from '../../../../assets/images/like.png'

type MessagePropsType = {
    message: string
    likesCount: number
}

const Post = (props: MessagePropsType) => {
    return (
        <div className={s.item}>
            <div className={s.postBlock}>
                <img src={userImg} alt={'user'}/>
                <div className={s.text}>{props.message}</div>
            </div>
            <div className={s.likes}>
                <img src={like} alt={'like'} style={{width: '15px'}}/>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post;