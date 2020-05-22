// created by Wes

// make an news input for URL, synopsis, and title
const makeNewsComponent = (news) => {
  // Create HTML structure for a news component
  return `
  <section class="article--${news.newsId}">
          <div class="news_title">
            <h2 class="title">Title: ${news.title}</h2>

          <p class="synopsis">
            <label class="news_synopsis">synopsis:</label> ${news.synopsis}</p>

          <p class="url">
            <label class="news_url">URL:</label> ${news.url}</p>

           </section>
        `;
};
// export the news component
export default makeNewsComponent;