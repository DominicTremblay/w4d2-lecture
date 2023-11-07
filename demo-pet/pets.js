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
    <footer>${petObj.name} is a ${petObj.type} and is ${petObj.age} ${petObj.age < 2? "year": "years"} old</footer>
  </article>`;
};

const renderPets = (petsArr) => {
  $.each(petsArr, function (index, pet) {
    // Create each new pet element in memory

    const newPet = createPetElement(pet);

    // attach each new pet element to the DOM
    // target the pet container

    $('.pets-container').append(newPet);
  });
};

$(document).ready(function () {
  // Document ready ensures that the DOM is fully loaded before doing manipulation on it
  // Any DOM manipulation should be here

  // Loop through the pets array

  renderPets(pets);
});
