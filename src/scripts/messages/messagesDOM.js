import makeMessageComponent from "./messages/messageComponent.js"

const renderMessages = (messages) => {
    const messageContainer = document.querySelector(".container")
    messageContainer.innerHTML = ""

    for(let i = 0; i < messages.length; i++){
        const message = messages[i]
        messageContainer.innerHTML += makeMessageComponent(message)
    }
}

export default renderMessages