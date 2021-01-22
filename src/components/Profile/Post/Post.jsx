import s from './Post.module.css'

const Post = (props) => {
    let avatar = props.avatar || 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png'
    return (
        <div className={s.post}>
            <img src={avatar} alt="Avatar" />
            <span>{props.message}</span>
            <div>
                <span>{props.likes} like(s)</span>
            </div>
        </div>
    )
}

export default Post