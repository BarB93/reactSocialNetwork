import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

    const mapStateToProps = (state) => {
        return {
            state: state.profilePage
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            updatePostText: (text) => {
                dispatch(updatePostTextActionCreator(text))
            },
            addPost: () => {
                dispatch(addPostActionCreator())
            }

        }
    }

    const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer