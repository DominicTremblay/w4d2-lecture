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
  <footer>${petObj.name} is a ${petObj.type} and is ${petObj.age} ${
    petObj.age < 2 ? 'year' : 'years'
  } old</footer>
</article>`;
};

const renderPetElements = (petsArr) => {
  // loop through the pets Arr
  $.each(petsArr, function (index, petObj) {
    $('.pets-container').append(createPetElement(petObj));
  });
};

$(document).ready(function () {
  renderPetElements(pets);
});
