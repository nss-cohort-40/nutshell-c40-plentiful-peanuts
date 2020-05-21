// created by Wes
// this file talks to the database
// stores URL into a variable for convenience
const newsApi = " http://localhost:3000/news"

// exports all the functions
export default {
    // fetches all the stored news objects in the database
    getNews() {
        return fetch(`${newsApi}`).then(newsData => newsData.json())
    },
    // adds a new news object to the database
    savedNews(savedNews) {
        return fetch(`${newsApi}`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(savedNews)
        })
    }
}

