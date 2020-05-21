const makeMessageComponent = (message) => {
    return `
        <section class="message--${message.id}">
        ${message.message}
        <button id="submitMessage--${message.id}">
        Submit Message
        </button>
        </section> 
    `
}