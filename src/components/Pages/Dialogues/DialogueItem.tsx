import React from 'react';
import s from "./DialogueItem.module.css";
import {NavLink} from "react-router-dom";

type DialogueItemType = {
    name: string
    id: number
}
const DialogueItem = (props: DialogueItemType) => {
    return (
        <div className={s.item}>
            <NavLink to={'/dialogues/' + props.id} className={({isActive}) => isActive ? s.active : s.inactive}>{props.name}</NavLink>
        </div>
    );
};

export default DialogueItem;