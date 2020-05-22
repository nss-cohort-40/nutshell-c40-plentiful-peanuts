import messageAPI from "./messages/DataManager.js"
import renderMessages from "./messages/messagesDOM.js"

let messageContainer = document.querySelector(".messages")

let messageManager = {
    registerDeleteListener(){
        messageContainer.addEventListener("click", event => {
            if(event.target.id.startsWith("deleteMessage--")){
                const messageToDelete = event.target.dispatchEvent.split("--")[1]

                messageAPI.deleteMessage(messageToDelete)
                .then(messageAPI.getMessages)
                .then(renderMessages)
            }
        })
    }
}

export default messageManager