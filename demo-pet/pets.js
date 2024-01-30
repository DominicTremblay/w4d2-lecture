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

const createPetElement = (petInfo) => {
  const petElement = `
  <article>
  <header>
    <h2>${petInfo.name}</h2>
  </header>
  <div class="content">
    <ul>
      <li><span>Species: </span>${petInfo.type}</li>
      <li><span>Age: </span>${petInfo.age}</li>
    </ul>
  </div>
  <footer>${petInfo.name} is a ${petInfo.type} and is ${petInfo.age} ${
    petInfo.age < 3 ? 'year' : 'years'
  } old</footer>
</article>
  `;

  return petElement;
};

const renderPetElements = (petsArr) => {
  $.each(petsArr, function (index, petObj) {
    // const petElement = createPetElement(petObj);
    $('.pets-container').append(createPetElement(petObj));
  });
};

$(document).ready(function () {
  // Any DOM manipulation needs to happen her
  // loop through the pets
  // create an article element with the pet info
  // Add the article to the parent container

  renderPetElements(pets);
});
