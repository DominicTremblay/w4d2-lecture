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

const createPetElement = function (petObj) {



  // create the HTML
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
  <footer>${petObj.name} is a >${petObj.type} and is ${petObj.age} years old</footer>
</article>`;

  return petElement;
};

// loop through the petObjects
// call createElement
// append it to the section
const renderPetElements = function (target) {
  // loop through the list of pets

  for (let petObj of pets) {
    // Create the pet HTML element
    const newElement = createPetElement(petObj);
    // attach the new pet HTML element to the DOM => append
    target.append(newElement);

  }
};

$(document).ready(function () {


  // const petContainer = document.querySelector('#pets-container');
  const petContainer = $('#pets-container');

  renderPetElements(petContainer);

  const frm = $('#frm-pet');

  frm.on('submit', function(event){

    event.preventDefault();

    // extract the info from the form

    // create the petElement

    // add it to its container

  })
  
});
