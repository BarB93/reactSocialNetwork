import Post from '../Post/Post'
import s from './MyPosts.module.css'
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength50, minLength2, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'newPost'} placeholder={'Введите текст'} component={Textarea} validate={[required, maxLength50, minLength2]}/></div>
            <div><button type={'submit'}>Добавить пост</button></div>
        </form>
    )
}

const MyPostReduxForm = reduxForm({form: 'addNewPostForm'})(MyPostForm)


const MyPosts = React.memo(props => {


        let postElements = props.posts.map(post => <Post message={post.message} key={post.id}
                                                              likes={post.likes}/>).reverse()
        const addNewPost = (values) => {
            props.addPost(values.newPost)
        }

        return (
            <div>
                <div className={s.my_posts}>
                    <div>Мои посты:</div>
                    <MyPostReduxForm onSubmit={addNewPost}/>
                </div>

                {postElements}
            </div>
        )

})

export default MyPosts