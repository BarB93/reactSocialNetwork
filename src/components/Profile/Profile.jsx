import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";

const Profile = (props) => {

    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile} status={props.status} saveProfile={props.saveProfile} updateStatus={props.updateStatus} savePhoto={props.savePhoto} isOwner={props.isOwner}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile