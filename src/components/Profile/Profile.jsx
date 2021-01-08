import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo descr='Описание профиля'/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}

export default Profile