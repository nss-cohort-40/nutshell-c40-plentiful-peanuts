const messageAPI = "http://localhost:3000/messages"

export default{
    getMessages(){
        return fetch(`${messageAPI}`)
        .then(response => response.json())
    },

    saveMessage(message){
        return fetch(`${messageAPI}`), {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        }
    }

}