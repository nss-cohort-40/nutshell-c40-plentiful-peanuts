const API = {
    getNewsEntries() {
        return fetch("http://localhost:5000/newsEntries")
            .then((response) => response.json())
            .then((myNews) => {
                console.log("My News: ", myNews);
                renderNewsEntries(myNews);
            });
    },
};

export default { API }
