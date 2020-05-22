const makeMessageComponent = (message) => {
    return `
        <section class="messages--${message.messageId}">
        ${message.message}
        <div class="message--${message.messageId}">
        </div>
        </section> 
    `
}

export default makeMessageComponent