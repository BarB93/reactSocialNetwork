import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageTextActionCreator, updateMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

const DialogsContainer = function () {

    return <StoreContext.Consumer>
            {
                store => {
                    const sendMessage = () => {
                        store.dispatch(sendMessageTextActionCreator())
                    }

                    const onMessageChange = (text) => {
                        store.dispatch(updateMessageTextActionCreator(text))
                    }

                   return <Dialogs state={store.getState().messagesPage} updateMessageText={onMessageChange}
                             sendMessage={sendMessage}/>
                }

            }
        </StoreContext.Consumer>

}

export default DialogsContainer
