import messageAPI from "./messagesDataManager.js"
import renderMessages from "./messages/messagesDOM.js"

let messageContainer = document.querySelector(".container")

let messageManager = {
    registerDeleteListener(){
        messageContainer.addEventListener("click", event => {
            if(event.target.dispatchEvent.startsWith("deleteMessage--")){
                const messageToDelete = event.target.dispatchEvent.split("--")[1]

                messageAPI.deleteMessage(messageToDelete)
                .then(messageAPI.getMessages)
                .then(renderMessages)
            }
        })
    }
}

export default messageManager