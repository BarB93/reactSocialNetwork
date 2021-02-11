import Dialogs from "./Dialogs";
import {sendMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import React from "react";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        state: state.messagesPage,
    }
}

const mapDispatchToPops = (dispatch) => {
    return {
        sendMessage: (newMessage) => {
            dispatch(sendMessageTextActionCreator(newMessage))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToPops),
    WithAuthRedirect
)(Dialogs)
