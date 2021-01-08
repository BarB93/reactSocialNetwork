import Post from '../Post/Post'
import s from './MyPosts.module.css'


const MyPosts = (props) => {
    let postElements = props.posts.map(post => <Post message={post.message} likes={post.likes} />)

    return (
        <div>
            <div className={s.my_posts}>
                My posts
                <div>
                    your post..
                </div>
            </div>

            {postElements}
        </div>
    )
}

export default MyPosts