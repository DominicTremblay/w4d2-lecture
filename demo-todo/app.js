// Manipulating documents Documentation
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
// https://developer.mozilla.org/en-US/docs/Web/API/Document

// we need the target the input box => extract its content

const todoFrm = document.getElementById('new-todo-frm');

todoFrm.addEventListener('submit', function (event) {
  // prevent the form submission
  event.preventDefault();

  console.log('no page reload!');

  // target the todo input
  // const todoInput = document.getElementById('todo');
  // access the input using form.elements

  // how do we refer to form?
  // console.log('Current element triggering the submit event');
  // console.log(this.elements.todo);
  // console.log(event.target);

  const todoInput = this.elements.todo;

  // we need to create a new element => li

  const newLi = document.createElement('li');
  newLi.className = 'todo-item';

  // assign its text content to the input box value

  newLi.textContent = todoInput.value;

  // target the parent container => ul

  const todoList = document.getElementById('todos');

  todoList.append(newLi);

  // reset the input box

  todoInput.value='';
  todoInput.focus();
});
