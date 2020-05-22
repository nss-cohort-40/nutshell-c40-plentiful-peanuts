// imports all functions and modules then renders them in the dom


//import newsData from "./news/newsData.js";
import newsApi from "./news/newsData.js";
import renderNews from "./news/DOM-news.js";
// invokes the newsData object and getNews function .then rendersNews to the DOM
//newsData.getNews().then(renderNews)
newsApi.getNews().then(news => renderNews(news))

import userAPI from "./users/userAPI.js"

import messageAPI from "./messages/messageDataManager.js"
import renderMessages from "./messages/messagesDOM.js"
//import saveMessage from "./messages/messageDataManager.js"
//invokes the getMessages function and then renders the messages to the DOM
messageAPI.getMessages().then(messages => renderMessages(messages))

const submitMessageBtn = document.querySelector("#submitMessage")

submitMessageBtn.addEventListener("click", (event) => {
    event.preventDefault()

    const messageInput = document.querySelector("#submitMessage").value

    const newMessage = {
        messageInput
    }

    messageAPI.saveMessage(newMessage)
    .then(messageAPI.getMessages)
    .then(messages => renderMessages(messages))
});

const emailInput = document.querySelector(".email-input")
const passwordInput = document.querySelector(".password-input")
const submitButton = document.querySelector(".submit")

submitButton.addEventListener("click", (event) => {
    //prevents the page from submitting
    event.preventDefault()

    //the find method takes a condition and operates like a forEach 
    const users = userAPI.getUsers().then(arrayOfUsers => {


        //returns the foundUser without having to write an if statement
        //stores the user object in the foundUser variable
        let foundUser = arrayOfUsers.find(user => emailInput.value === user.email 
        && passwordInput.value === user.password)

        if (foundUser) {
            sessionStorage.setItem("activeUser", foundUser.id)
            window.alert(`"Welcome, ${foundUser.username}"`)
        }
        else {
            window.alert("WRONG CREDENTIALS, FOOL")
        }

        //sessionStorage.removeItem("activeUser", foundUser.id)
    })


    if (emailInput.value === "" || emailInput.value === null || passwordInput.value === "" 
        || passwordInput.value === null) {
        window.alert("Input fields cannot be empty. Please enter the email address associated with the account.")

    }

})













