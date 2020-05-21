const url = "http://localhost:3000/users"

const userAPI = {
    getUsers(){
        return fetch(`${url}`)
        .then(response => response.json())
    },

    addUser(user){
        return fetch(`${url}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    }
}

export default userAPI