# Frontend Mentor - Results summary component

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

- Desktop

<img src="./screenshot/desktop.png" alt="Desktop Image" width="1440px">

- Mobile

<img src="./screenshot/mobile.png" alt="Mobile Image" width="375px">

### Links

- [Solution URL ](https://github.com/fmanimashaun/faq-accordion)
- [Live Site URL](https://fmanimashaun.github.io/faq-accordion/)

## My process

### Built with

- Semantic HTML5 markup
- Sass
- Flexbox
- Mobile-first workflow
- TypeScript
- Vite for development and build process
- GitHub Pages for deployment

### What I learned

To dynamically add the data using the provided json data, I make use of code below to dynamically generate the score list items. Also, I use the reduce() method to get the total score and find the average by dividing my number of scores using he length method. I also use object destructuring to extract only the score value from each object.

```ts

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

```

### Continued development

I plan to explore advanced SASS features to enhance the maintainability and scalability of my stylesheets. I also intend to further integrate TypeScript in future frontend projects to reinforce type safety and streamline debugging.

### Useful resources

- [CSS-Tricks: Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This guide was instrumental in implementing the flexible layout of the component.
- [MDN Web Docs: CSS Display Property](https://developer.mozilla.org/en-US/docs/Web/CSS/display) - Helped me with controlling element visibility.
- [Frontend Mentor Community](https://www.frontendmentor.io/community) - Engaging with other developers in the community provided insights and useful tips for handling responsive layouts.

## Author

👤 **Engr. Animashaun Fisayo**

- [GitHub](https://github.com/fmanimashaun)
- [Twitter](https://twitter.com/fmanimashaun)
- [LinkedIn](https://www.linkedin.com/in/fmanimashaun/)
- [Website](https://fmanimashaun.com)
- [Blog](https://blog.fmanimashaun.com)


## Acknowledgments

This project was completed as part of the [Frontend Mentor](https://www.frontendmentor.io/) challenge. The platform provided an excellent opportunity to practice and refine my front-end skills through realistic project challenges.
