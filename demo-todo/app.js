// Manipulating documents Documentation
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
// https://developer.mozilla.org/en-US/docs/Web/API/Document

// event the listener => form element => submit

const todoFrm = document.getElementById('new-todo-frm');

todoFrm.addEventListener('submit', function(event) {
  
  // stop the default behavior 
  event.preventDefault();
  // capture the input box and extract the content
  const inputBox = this.elements.todo;

  const content= inputBox.value;
  // create a new LI element
  const newLi = document.createElement('li');
  newLi.textContent = content;
  console.log(newLi)
  // append the new li to the list of todos
  const todoList = document.getElementById('todos');
  // add the new li to the list of todos
  todoList.append(newLi)


  // reset the input value
  inputBox.value='';

  // put back the focus on the input box
  inputBox.focus();


})




