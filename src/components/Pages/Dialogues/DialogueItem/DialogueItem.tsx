import React from 'react';
import s from "./DialogueItem.module.css";
import {NavLink} from "react-router-dom";
import avatar from '../../../../assets/images/user.png';

type DialogueItemType = {
    name: string
    id: number
}
const DialogueItem = (props: DialogueItemType) => {
    return (
        <div className={s.item}>
            <NavLink to={`/dialogues/${props.id}`} className={({isActive}) => isActive ? s.active : s.inactive}>
                <div className={s.block}>
                    <img src={avatar} className={s.avatar} alt={'avatar'}/>
                    {props.name}
                </div>
            </NavLink>
        </div>
    );
};

export default DialogueItem;