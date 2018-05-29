window.onload = function() {
  init();
}

function init() {
  const ul_poems = document.getElementById('ul-poems');
  const ul_articles = document.getElementById('ul-articles');
  
  let html_lis = '';
  poems.forEach((poem, index) => {
    html_lis += `
      <li class="mdui-list-item mdui-ripple app-sub-list  app-hide-list">
        <a href="#" class="app-list-item-link mdui-text-left" onclick="show('poem', ${index})">
          ${poem.title}
        </a>
      </li>
    `;
  });
  ul_poems.innerHTML = html_lis;

  html_lis = '';
  articles.forEach((article, index) => {
    html_lis += `
      <li class="mdui-list-item mdui-ripple app-sub-list  app-hide-list">
        <a href="#" class="app-list-item-link mdui-text-left" onclick="show('article', ${index})">
          ${article.title}
        </a>
      </li>
    `;
  });
  ul_articles.innerHTML = html_lis;
}

function show(type, index) {
  const title = document.getElementById('title');
  const content = document.getElementById('content');
  const tips = document.getElementById('tips');

  if (type === 'poem') {
    title.innerHTML = `
      <h2>${poems[index].title}</h2>
    `;

    let html_content = '';
    poems[index].contents.forEach((row, index) => {
      html_content += `
        <p>${row}</p>
      `;
    });
    content.innerHTML = html_content;

    let html_tips = '';
    poems[index].tips.forEach((tip, index) => {
      html_tips += `
        <small>${tip}</small>
      `;
    });
    tips.innerHTML = html_tips;
  } else if (type === 'article') {
    title.innerHTML = `
      <h2>${articles[index].title}</h2>
    `;

    let html_content = '';
    articles[index].contents.forEach((row, index) => {
      html_content += `
        <p>${row}</p>
      `;
    });
    content.innerHTML = html_content;

    let html_tips = '';
    articles[index].tips.forEach((tip, index) => {
      html_tips += `
        <small>${tip}</small>
      `;
    });
    tips.innerHTML = html_tips;
  }
}