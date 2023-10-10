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
  // {
  //   name: 'Bongo',
  //   type: 'dog',
  //   age: 2,
  // },

  return `<article>
  <header>
      <h2>${petObj.name}</h2>
      </header>
      <div class="content">
      <ul>
      <li>
      <span>Species: </span>${petObj.type}
      </li>
      <li>
      <span>Age: </span>${petObj.age}
      </li>
      </ul>
      </div>
      <footer>${petObj.name} is a ${petObj.type} and is ${petObj.age} ${
    petObj.age > 1 ? 'years' : 'year'
  } old</footer>
  </article>`
};
// iterate through the list of pets
// create an HTML element

const renderPets = (petsArr) => {
  $.each(petsArr, (index, petObj) => {
    const petElement = createPetElement(petObj);

    // document.querySelector('.pets-container')

    $('.pets-container').append(petElement);
  });
};

// add each HTML element to the .pets-container section

$(document).ready(function () {
  // any DOM manipulation must happen here
  renderPets(pets);
});
