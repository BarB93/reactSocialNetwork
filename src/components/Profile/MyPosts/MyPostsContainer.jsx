import {addPost, updatePostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

    const mapStateToProps = (state) => {
        return {
            state: state.profilePage
        }
    }

    const MyPostsContainer = connect(mapStateToProps,{addPost})(MyPosts)

export default MyPostsContainer