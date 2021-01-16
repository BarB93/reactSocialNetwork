import Post from '../Post/Post'
import s from './MyPosts.module.css'
import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/store";


const MyPosts = (props) => {
    let postElements = props.state.posts.map(post => <Post message={post.message} likes={post.likes}/>)

    let newPostElement = React.createRef()



    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {

        const text = newPostElement.current.value;
        props.dispatch(updatePostTextActionCreator(text))
    }


    return (
        <div>
            <div className={s.my_posts}>
                My posts
                <div>
                    <div>
                        <textarea ref={newPostElement} value={props.state.newPostText}  onChange={onPostChange} cols="30" rows="5" />
                    </div>
                    <div>
                        <button onClick={addPost}>Добавить пост</button>
                    </div>
                </div>
            </div>

            {postElements}
        </div>
    )
}

export default MyPosts