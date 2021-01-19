import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";


const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        {
            store => {
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text) => {
                    store.dispatch(updatePostTextActionCreator(text))
                }

                return (<MyPosts state={store.getState().profilePage} updatePostText={onPostChange} addPost={addPost}/>)
            }
        }
    </StoreContext.Consumer>

}


export default MyPostsContainer