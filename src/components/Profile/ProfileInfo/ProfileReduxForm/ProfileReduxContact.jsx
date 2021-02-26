import React from 'react'
import s from '../ProfileInfo.module.css'
import {createField, Input} from "../../../common/FormControls/FormControls";

const ProfileReduxFormContact = ({contactTitle, contactValue}) => {

    return <div className={s.profile_contact}>
        <span  className={s.profile_contact_title}>{contactTitle}:</span>
        <span className={s.profile_contact_value}>{createField('contacts.'+contactTitle,Input,null,'',)}</span>
    </div>
}
export default ProfileReduxFormContact