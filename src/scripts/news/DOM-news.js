// created by Wes
import makeNewsComponent from './newsComponent.js'

// iterates through and finds the newses
const renderNews = (news) => {
    for (let i = 0; i < news.length; i++) {
        const newsList = document.querySelector(".newsList");

        const allNews = news[i];
        newsList.innerHTML += makeNewsComponent(allNews);
    }
};

export default renderNews; 