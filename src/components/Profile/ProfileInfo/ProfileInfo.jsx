import s from './ProfileInfo.module.css'

const ProfileInfo = function (props){
    let avatar = props.avatar || "https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png"

    return (
        <div className={s.profile_info}>
            <img className={s.avatar + ' global_avatar'} src={avatar} alt='Avatar'/>
            <div className={s.description}>{props.descr}</div>
        </div>
    )
}

export default ProfileInfo