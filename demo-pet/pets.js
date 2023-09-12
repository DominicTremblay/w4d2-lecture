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

const createArticle = (animalObj) => {
  return `
  <article>
  <header>
    <h2>${animalObj.name}</h2>
  </header>
  <div class="content">
    <ul>
      <li><span>Species: </span>${animalObj.type}</li>
      <li><span>Age: </span>${animalObj.age}</li>
    </ul>
  </div>
  <footer>${animalObj.name} is a ${animalObj.type} and is ${animalObj.age} years old</footer>
</article>
  `;
};

const renderPets = (petsList) => {

  // petsList.forEach((index, animalObj) => {
  //   $('#pets-container').append(createArticle(animalObj));
  // })

 $.each(petsList, (index, animalObj) => {
    $('#pets-container').append(createArticle(animalObj));
  });
};

$('document').ready(() => {
  // DOM manipulation
  // loop through the pets array
  // create an HTML article element out of the object properties
  // Append the elements to the pets-container

  renderPets(pets);
});
