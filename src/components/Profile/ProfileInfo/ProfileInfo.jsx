import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ava from '../../../accets/img/avatar.webp'
import {useState} from "react";
import ProfileData from "./ProfileData/ProfileData";
import ProfileReduxForm from "./ProfileReduxForm/ProfileReduxForm";

const ProfileInfo = function (props) {
    const [isEditMode, setIsEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onPhotoSelected = (e) => {
        if (e.currentTarget.files.length) {
            props.savePhoto(e.currentTarget.files[0])
        }
    }

    const activateEditMode = () => {
        setIsEditMode(true)
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData)
            .then(() => {
                setIsEditMode(false)
            })
    }

    return (
        <div className={s.profile_info}>
            <div className={s.profile_ava}>
                <img className={s.avatar + ' global_avatar'} src={props.profile.photos.large || ava} alt='Avatar'/>
                {props.isOwner && <input type="file" onChange={onPhotoSelected}/>}
            </div>
            <div className={s.profile_data}>
                {isEditMode ?
                    <ProfileReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} isOwner={props.isOwner} activateEditMode={activateEditMode} status={props.status} updateStatus={props.updateStatus}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} activateEditMode={activateEditMode} status={props.status} updateStatus={props.updateStatus}/>
                }
            </div>
        </div>
    )
}

export default ProfileInfo





