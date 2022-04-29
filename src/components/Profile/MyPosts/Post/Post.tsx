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
            <img src={userImg} alt={'user'}/>
                {props.message}
                <div>
                    <img src={like} alt={'like'} style={{width: '15px'}} />
                    {props.likesCount}
                </div>

        </div>
)
}

export default Post;