



// Manipulating documents Documentation
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
// https://developer.mozilla.org/en-US/docs/Web/API/Document

// When? There is a click on the submit button
// add event listener => submit event

const frm = document.querySelector('#new-todo-frm');

frm.addEventListener('submit', function(event) {

  // prevent the default form submission by the browser => no page relaod
  event.preventDefault();

  // refer to the current element that the event occured on
  // using event.target
  console.log("target:", event.target);
  // or this
  console.log("this", this);
// target the input box
  const inputBox = this.elements.todo;
// to extract the todo content
  const todoContent = inputBox.value;

  console.log(todoContent);
// create the new element (li)
  const newLi = document.createElement('li');


// change its content
  newLi.innerText = todoContent;

  console.log(newLi);

// Add it the the list (ul)
// target the parent element => append
  const list = document.querySelector('#todos');

  list.append(newLi);

  // Reset our input box
  inputBox.value = '';
  inputBox.focus();


});






