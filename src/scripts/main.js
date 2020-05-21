// imports all functions and modules then renders them in the dom


import newsData from "./news/newsData.js";
import renderNews from "./news/DOM-news.js";
// invokes the newsData object and getNews function .then rendersNews to the DOM
newsData.getNews().then(renderNews)