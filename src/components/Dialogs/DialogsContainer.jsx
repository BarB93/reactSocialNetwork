import Dialogs from "./Dialogs";
import {sendMessageTextActionCreator, updateMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";

    const mapStateToProps = (state) => {

        return{
            state: state.messagesPage
        }
    }
    const mapDispatchToPops = (dispatch) => {
        return {
            updateMessageText: (text) => {
                dispatch(updateMessageTextActionCreator(text))
            },
            sendMessage: () => {
                dispatch(sendMessageTextActionCreator())
            }
        }
    }

    const DialogsContainer = connect(mapStateToProps,mapDispatchToPops)(Dialogs)

export default DialogsContainer
