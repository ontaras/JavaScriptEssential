var xhr = new XMLHttpRequest();
var url = './news_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles;
var articlesDiv = document.getElementById('articles');

articles.forEach(function(article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var description = document.createElement('p');
    description.textContent = article.description;

    var waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Text:';

    var article_text = document.createElement('p');
    article_text.textContent = article.body_of_article;

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(article_text);

    articlesDiv.appendChild(articleDiv);
  });
}
xhr.send();
