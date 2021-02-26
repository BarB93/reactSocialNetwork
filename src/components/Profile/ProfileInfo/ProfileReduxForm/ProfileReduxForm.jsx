import React from 'react'
import s from "../ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import ProfileReduxContact from "./ProfileReduxContact";

const ProfileForm = ({handleSubmit, profile, error}) => {

    return <form onSubmit={handleSubmit}>
       <div className={s.profileData_button}>
            <button>сохранить</button>
        </div>
        <div>
            <b>Имя:</b>
            <div>{createField('fullName', Input, null)}</div>
        </div>
        <div>
            <b>Ищу работу:</b>
            <div>{createField('lookingForAJob', Input, null, '', {type: 'checkbox'})}</div>
        </div>
        <div>
            <b>Мои скилы:</b>
            <div>{createField('lookingForAJobDescription', Textarea, null)}</div>

        </div>
        <div>
            <b>Обо мне:</b>
            <div>{createField('aboutMe', Textarea, null)}</div>
        </div>
        <div>
            <b>Контакты:</b>
            {Object.keys(profile.contacts).map(key => <ProfileReduxContact key={key} contactTitle={key}
                                                                           contactValue={profile.contacts[key]}/>)}
        </div>
        {error && <div className={s.formSummaryError}>{error}</div>}
    </form>
}

const ProfileReduxForm = reduxForm({form: 'profile-form'})(ProfileForm)

export default ProfileReduxForm