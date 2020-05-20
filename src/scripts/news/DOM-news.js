const newsLog = document.querySelector(".newsLog");
const renderNewsEntries = (newsEntries) => {
    for (let i = 0; i < newsEntries.length; i++) {
        const allNews = newsEntries[i];
        newsLog.innerHTML += makeNewsComponent(allEntries);
    }
};

export default { newsLog }