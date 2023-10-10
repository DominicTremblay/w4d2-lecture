// Manipulating documents Documentation
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
// https://developer.mozilla.org/en-US/docs/Web/API/Document

// listen to the form event: click? submission?
// target the button => add an event listener

const todoFrm = document.getElementById('new-todo-frm');

todoFrm.addEventListener('submit', function (event) {
  // stop the default from happening
  event.preventDefault();
  // extract the value of the input box
  // access to that input

  const todoInput = this.elements.todo;
  const todoContent = todoInput.value;

  // add the content of that input to the list
  const newLi = document.createElement('li');
  newLi.append(todoContent);

  // attach the new li to the ul list

  const todoList = document.getElementById('todos');

  todoList.append(newLi);

  // reinitalize
  todoInput.value = '';

  todoInput.focus();
});
