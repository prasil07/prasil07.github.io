// Select the main element
const mainElement = document.querySelector('main');

// Add a dynamic paragraph
const dynamicParagraph = document.createElement('p');
dynamicParagraph.textContent = `Dynamic content added at ${new Date().toLocaleString()}`;
dynamicParagraph.classList.add('mt-3'); // Add Bootstrap margin-top class
mainElement.appendChild(dynamicParagraph);

// Add a dynamic article using template strings
const article = document.createElement('article');
article.innerHTML = `
  <h2>Dynamic Article</h2>
  <p>This article was dynamically generated. Timestamp: ${new Date().toLocaleTimeString()}</p>
`;
article.classList.add('my-3'); // Add Bootstrap margin-y class
mainElement.appendChild(article);
