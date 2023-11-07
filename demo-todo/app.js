// Manipulating documents Documentation
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
// https://developer.mozilla.org/en-US/docs/Web/API/Document

// listening for the submit of the form
// target the form element

const todoFrm = document.querySelector("#new-todo-frm");

todoFrm.addEventListener("submit", function(e) {
  e.preventDefault();
  // capture the text content of the input box
  const todoInput = this.elements.todo;
  
  // Create a new LI element
  // Assign the text content to it

  const newLi = document.createElement('li');
  newLi.textContent = todoInput.value;



  // append to new LI to the list of todos
  const todoList = document.getElementById('todos');
  todoList.append(newLi)

  // reset the input box
  todoInput.value = '';
  
  // put back the focus on it
  todoInput.focus();

});





