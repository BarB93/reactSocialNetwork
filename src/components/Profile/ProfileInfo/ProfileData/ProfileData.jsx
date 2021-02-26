import s from "../ProfileInfo.module.css";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import ProfileContact from "./ProfileContact";

const ProfileData = (props) => {
    return <div>
        {props.isOwner && <div className={s.profileData_button}>
            <button className={s.profile_button} onClick={() => {props.activateEditMode()}}>редактировать</button>
        </div>}
        <div>
            <b>Имя:</b> <span className={s.name}>{props.profile.fullName} </span>
        </div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        <div>
            <b>Ищу работу:</b> {props.profile.lookingForAJob ? 'Да' : 'Нет'}
        </div>
        {props.profile.lookingForAJob &&
        <div>
            <b>Мои скилы:</b> {props.profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>Обо мне:</b> {props.profile.aboutMe}
        </div>
        <div>
            <b>Контакты:</b>
            {Object.keys(props.profile.contacts).filter(key => !!props.profile.contacts[key]).map(key => <ProfileContact key={key} contactTitle={key}
                                                                            contactValue={props.profile.contacts[key]}/>)}
        </div>
    </div>
}
export default ProfileData