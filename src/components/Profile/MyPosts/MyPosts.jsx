import Post from '../Post/Post'
import s from './MyPosts.module.css'
import React from "react";



const MyPosts = (props) => {

    let postElements = props.state.posts.map(post => <Post message={post.message} key={post.id} likes={post.likes}/>)

    let newPostElement = React.createRef()



    let onAddPost = () => {
        props.addPost()

    }

    let onPostChange = () => {

        const text = newPostElement.current.value;
        props.updatePostText(text)
    }


    return (
        <div>
            <div className={s.my_posts}>
                My posts
                <div>
                    <div>
                        <textarea ref={newPostElement} value={props.state.newPostText}  onChange={onPostChange} placeholder='Введите текст' cols="30" rows="5" />
                    </div>
                    <div>
                        <button onClick={onAddPost}>Добавить пост</button>
                    </div>
                </div>
            </div>

            {postElements}
        </div>
    )
}

export default MyPosts