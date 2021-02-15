import React, {useEffect, useState} from 'react'
import s from './ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const activateEditMod = () => {
        setEditMode(true)
    }

    const deactivateEditMod = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>

            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMod}>{props.status || '----'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} onBlur={deactivateEditMod} autoFocus={true} type="text"
                       value={status}/>
            </div>
            }

        </div>
    )
}

export default ProfileStatusWithHooks