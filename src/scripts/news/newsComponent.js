// created by Wes

// make a entry news input for URL, summary, and title
const makeNewsEntryComponent = (newsEntry) => {
    // Create HTML structure for a news entry
    return `
          <div class="news_title_entry">
            <h2 class="title">Title: ${newsEntry.title}</h2>

          <p class="summary">
            <label class="date_class">Summary:</label> ${newsEntry.summary}</p>

          <p class="url">
            <label class="entry_class">URL:</label> ${newsEntry.url}</p>
          
        `;
};
// export the news entry component
export default { makeNewsEntryComponent };