import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = function (props){
    if(!props.profile) {
        return <Preloader />
    }

    let avatar = props.profile.photos.small || "https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png"

    return (
        <div className={s.profile_info}>
            <img className={s.avatar + ' global_avatar'} src={avatar} alt='Avatar'/>
            <div className={s.name}>{props.profile.fullName}</div>
        </div>
    )
}

export default ProfileInfo