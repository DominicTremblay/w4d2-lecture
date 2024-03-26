$(document).ready(function() {

// any DOM manipulation will be performed here


// target the todo form
const todoForm = $('#new-todo-frm');
// catch the submit event of the todo form

todoForm.on('submit', function (event) {
  // prevent the default submission of the browser
  event.preventDefault();
  // target the todo input
  const todoInput = $(this).children(".todos");
  console.log(todoInput);

  // get the content of the todo input
  const todoContent = todoInput.val();

  // Create a new todo item (li)
  const newItem = $('<li>');

  // add the todo content to the new todo item
  newItem.append(todoContent);

  // Add the todo content to the todo list (ul)
  // target the todolist
  const todoList = $("#todos");
  todoList.append(newItem);
  // reset the input todo
  todoInput.val('');
  // reset the focus
  todoInput.focus();
});






});