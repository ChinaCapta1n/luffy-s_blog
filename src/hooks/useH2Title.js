export default function genH2Title(h2) {
    const article_aside = document.querySelector('.article-aside');
    const p = document.createElement('p');
    p.innerText = 'In this article';
    p.style.fontSize = '1.7rem';
    p.style.marginBottom = '.7rem';
    const h2Titles = document.querySelectorAll(h2);
    article_aside.appendChild(p)

    const ul = document.createElement('ul');
    ul.style.borderLeft = '.3rem solid #ddd';
    ul.style.paddingLeft = '1rem';

    h2Titles.forEach(h2 => {
        const li = document.createElement('li');
        li.style.marginBottom = '1rem';
        const a = document.createElement('a');
        a.href = "#" + h2.getAttribute('id');
        a.innerText = h2.getAttribute('id');
        li.appendChild(a);
        ul.appendChild(li);
    })

    article_aside.appendChild(ul);
}