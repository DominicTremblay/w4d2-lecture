// Manipulating documents Documentation
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
// https://developer.mozilla.org/en-US/docs/Web/API/Document

// use an event
// click event?
// submit

const todoFrm = document.getElementById('new-todo-frm');

const validateTodo = content => {

  if (!content) {
    return `Please enter a todo!`
  }

  return false;

}

todoFrm.addEventListener('submit', function (event) {
  // prevent the form submission
  event.preventDefault();
  // this here means the form element

  // get the todo input
  const todoInput = this.elements.todo;

  // grab the text of the todo input
  const todoContent = todoInput.value;

  const error = validateTodo(todoContent);


  
  if(error) {
    const errorElement = document.createElement('h3');
    errorElement.innerText = error;
    document.getElementById("error-msg").replaceChild(errorElement);
    return;
  }

  // create a li element
  const newLi = document.createElement('li');

  newLi.innerText = todoContent;


  // Add a new li element to the todos ul
  const todoList = document.getElementById('todos');

  todoList.append(newLi);

  todoInput.value = '';

});
