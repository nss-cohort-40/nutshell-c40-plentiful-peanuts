// needs to render a register form on the DOM
// needs an input for email
// needs an input for password

// this function turns the password characters to "X"
function myfunction() {
    const passwordX = document.getElementById("myInput");
    if (passwordX.type === "password") {
        passwordX.type = "text";

    } else {
        passwordX.type = "password";
    }
}