// Pets array of objects
const pets = [
  {
    name: 'Dingo',
    type: 'dog',
    age: 1,
  },
  {
    name: 'Kongo',
    type: 'snake',
    age: 3,
  },
  {
    name: 'Meowngo',
    type: 'cat',
    age: 2,
  },
  {
    name: 'Bongo',
    type: 'dog',
    age: 2,
  },
];

const createArticle = (petObj) => {
  return `<article>
<header>
  <h2>${petObj.name}</h2>
</header>
<div class="content">
  <ul>
    <li><span>Species: </span>${petObj.type}</li>
    <li><span>Age: </span>${petObj.age}</li>
  </ul>
</div>
<footer>${petObj.name} is a ${petObj.type} and is ${petObj.age} years old</footer>
</article>`;
};

const renderArticles = (petsArr) => {
  // deal with the array

  $.each(petsArr, (index, petObj) => {
    // Target an element on the page
    // in jQuery => document.querySelector
    $('.pets-container').append(createArticle(petObj));
  });
};

// Ensure that the document is fully loaded before manipulating the DOM
$(document).ready(function () {
  // Any DOM Manipulation will be coded here

  renderArticles(pets);

  //
});
