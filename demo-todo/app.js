// Manipulating documents Documentation
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
// https://developer.mozilla.org/en-US/docs/Web/API/Document

// Listening for an event => click? => submit?
// target the element to apply to event on
// const todoFrm = document.querySelector('#new-todo-frm')
const todoFrm = document.getElementById('new-todo-frm');

todoFrm.addEventListener('submit', function (event) {
  event.preventDefault();
  // extract the content of the input box (todo)
  // target the input box, get its value


  const todoInput = this.elements.todo;
  const textContent = todoInput.value;
  // Create a new list item with that content
  // not attached to the DOM yet
  const newLi = document.createElement('li');
  newLi.classList.add('todo');
  
  // newLi.append(textContent);
  newLi.textContent = `${textContent} `;


  // create the delete button
  const delBtn = document.createElement('button');
  // add the text to the button "Delete"
  delBtn.textContent = "Delete";
  // Add the new LI to ou UL
  // const todoList = document.getElementById('todos');
  const todoList = document.querySelector('#todos')

  delBtn.addEventListener('click', function(event) {

    // remove the newLi from the UL
    todoList.removeChild(newLi);

  });

  newLi.append(delBtn)

  todoList.append(newLi);

  // clear the input
  todoInput.value = "";

});
