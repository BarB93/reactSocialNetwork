import React from 'react'
import s from '../ProfileInfo.module.css'

const ProfileContact = ({contactTitle, contactValue}) => {
    return <div className={s.profile_contact}><b>{contactTitle}</b>: {contactValue}</div>
}
export default ProfileContact

