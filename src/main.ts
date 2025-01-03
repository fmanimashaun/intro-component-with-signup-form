import './assets/scss/main.scss';
import data from './data.json';

const resultsContainer = document.querySelector('.card__summary-results') as HTMLElement;
const resultScore = document.querySelector('.card__result-score-value') as HTMLElement;

// Create a variable to accumulate all list items
let listItemsHTML = '';

data.forEach(({ category, score, icon }) => {
  // Construct the HTML structure using template literals
  listItemsHTML += `
    <li class="card__summary-result ${category.toLowerCase()}">
      <div class="card__summary-result-title">
        <img class="card__summary-result-icon" src="${icon}" aria-hidden="true" alt="icon">
        <h3 class="card__summary-result-name">${category}</h3>
      </div>
      <p class="card__summary-result-value"><span>${score}</span> / 100</p>
    </li>
  `;
});

// Append all list items to the container at once
resultsContainer.innerHTML = listItemsHTML;

const totalScore = data.reduce((sum, { score }) => sum + score, 0);
const averageScore = Math.round(totalScore / data.length);

resultScore.innerText = `${averageScore}`;
