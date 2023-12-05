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

const createPetElement = (petObj) => {

  // with jquery
  // const article = $('<article>')
  // const header = $('<header>').addClass('article-header')

  return `<article class='pet-item'>
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
</article>
`;
};



const renderPetElements = (pets) => {
  $.each(pets, (index, petObj) => {
    $('.pets-container').append(createPetElement(petObj));
  });
};

$(document).ready(function () {
  // Any DOM manipulation here
  // Ensures that the DOM is fully loaded
  // create a pet articlement out of each pet arr elements
  // append each to the section container

  renderPetElements(pets);
});
