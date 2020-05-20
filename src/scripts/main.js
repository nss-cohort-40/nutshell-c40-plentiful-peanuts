import userAPI from "./users/userAPI.js"

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
        let foundUser = arrayOfUsers.find(user => emailInput.value === user.email && passwordInput.value === user.password)

        if (foundUser) {
            sessionStorage.setItem("activeUser", foundUser.id)
            console.log(`"Welcome, ${foundUser.username}"`)
        }
        else {
            window.alert("WRONG CREDENTIALS, FOOL")
        }

        sessionStorage.removeItem("activeUser", foundUser.id)
    })


    if (emailInput.value === "" || emailInput.value === null || passwordInput.value === "" || passwordInput.value === null) {
        window.alert("Input fields cannot be empty. Please enter the email address associated with the account.")

    }

    function redirectPage(){
        location.replace("https://www.google.com")
    }
})













