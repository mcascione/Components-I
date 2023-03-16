import './index.less'
import { data } from './components/article/article.js' 
import './components/menu/menu.js'

function articleMaker(artObj){
    const articleWrapper = document.createElement('div');
    const articleTitle = document.createElement('h2');
    const articleDate = document.createElement('p');
    const articleParagraphOne = document.createElement('p');
    const articleParagraphTwo = document.createElement('p');
    const articleParagraphThree = document.createElement('p');
    const expandButton = document.createElement('span');
    
    articleWrapper.classList.add = 'article';
    articleDate.classList.add = 'date';
    expandButton.classList.add = 'expandButton';

    articleWrapper.appendChild(articleTitle);
    articleWrapper.appendChild(articleDate);
    articleWrapper.appendChild(articleParagraphOne);
    articleWrapper.appendChild(articleParagraphTwo);
    articleWrapper.appendChild(articleParagraphThree);
    articleWrapper.appendChild(expandButton);
    
    articleTitle.textContent = artObj.title;
    articleDate.textContent = artObj.date;
    articleParagraphOne.textContent = artObj.firstParagraph;
    articleParagraphTwo.textContent = artObj.secondParagraph;
    articleParagraphThree.textContent = artObj.thirdParagraph;
    expandButton.textContent = '+';

    expandButton.addEventListener('click', () => {
        articleWrapper.classList.toggle('article-open')
    })

    return articleWrapper;
}

articleMaker(data);


data.forEach(article => {
    document.querySelector('div.articles').appendChild(articleMaker(article));
});

