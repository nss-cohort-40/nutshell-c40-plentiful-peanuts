import makeMessageComponent from "./messageComponent.js"

const renderMessages = (messages) => {
    for (let i = 0; i < messages.length; i++) {
        const messageContainer = document.querySelector(".messages");
        const message = messages[i];
        messageContainer.innerHTML += makeMessageComponent(message);
    }
};
 
export default renderMessages