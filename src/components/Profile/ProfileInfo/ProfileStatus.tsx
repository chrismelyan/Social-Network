import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';


type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileStatus = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [status, setStatus] = useState<string>(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.status}>
            <div>
                {!editMode && <span onDoubleClick={activateEditMode}>{props.status || '----'}</span>}
            </div>
            <div>
                {editMode && <input autoFocus onChange={onChangeHandler} value={status} onBlur={deactivateEditMode}/>}
            </div>
        </div>
    );
};

export default ProfileStatus;