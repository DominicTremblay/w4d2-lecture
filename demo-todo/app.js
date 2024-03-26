// Manipulating documents Documentation
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
// https://developer.mozilla.org/en-US/docs/Web/API/Document

// target the todo form
const todoForm = document.querySelector('#new-todo-frm');
console.log(todoForm);
// catch the submit event of the todo form

todoForm.addEventListener('submit', function (event) {
  // prevent the default submission of the browser
  event.preventDefault();
  // target the todo input
  const todoInput = this.elements.todo;

  // get the content of the todo input
  const todoContent = todoInput.value;
  // Create a new todo item (li)
  const newItem = document.createElement('li')
  // add the todo content to the new todo item
  newItem.textContent = todoContent
  console.log(newItem);
  // Add the todo content to the todo list (ul)
  // target the todolist
  const todoList = document.getElementById("todos");
  todoList.append(newItem);
  // reset the input todo
  todoInput.value = '';
  // reset the focus
  todoInput.focus();
});


