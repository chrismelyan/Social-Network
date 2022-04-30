import React, {useState} from 'react';


type ProfileStatusType = {
    status: string
}

const ProfileStatus = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
    }

    return (
        <>
            <div>
                {
                    !editMode && <span onDoubleClick={activateEditMode}>{'Hello'}</span>
                }
            </div>
            <div>
                {
                    editMode && <input autoFocus value={props.status} onBlur={deactivateEditMode}/>
                }
            </div>
        </>
    );
};

export default ProfileStatus;