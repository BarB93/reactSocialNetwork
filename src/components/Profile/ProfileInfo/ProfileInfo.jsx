import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = function (props){
    if(!props.profile) {
        return <Preloader />
    }

    let avatar = props.profile.photos.small || "https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png"

    return (
        <div className={s.profile_info}>
            <img className={s.avatar + ' global_avatar'} src={avatar} alt='Avatar'/>
            <div>
                <div className={s.name}>{props.profile.fullName}</div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>
    )
}

export default ProfileInfo