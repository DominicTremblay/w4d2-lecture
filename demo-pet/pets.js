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

// create an article html element using a pet object
const createPetElement = (petObj) => {
  const petElement = `<article>
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

  return petElement;
};

const renderPetElements = (petsArr, container) => {
  // iterate throught the list of pets (pets arrray)
  for (let petObj of petsArr) {
    // create an article html element for each petObj
    const petElement = createPetElement(petObj);
    // add each article html element to the pets-container

    container.append(petElement);
  }
};

console.log($('#pets-container'))

// before DOM manipulation, we need it to be fully loaded

$(document).ready(function () {
  // Any DOM manipulation need to happen here
  renderPetElements(pets, $('#pets-container'));

  console.log($('#pets-container'))

});
