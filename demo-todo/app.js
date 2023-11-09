// Manipulating documents Documentation
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
// https://developer.mozilla.org/en-US/docs/Web/API/Document


// target the form element on the page => getDocumentById
const todoFrm = document.getElementById('new-todo-frm');

// catch the submission of the form
todoFrm.addEventListener('submit', function(event) {
  // stop the form submission
  event.preventDefault();
  // extract the todo content
  const inputBox = this.elements.todo;
  const todoContent = inputBox.value;
  
  // create a new li element

  const newLi = document.createElement('li');

  // assign the text content to it
  newLi.textContent = todoContent;


  const delBtn = document.createElement('button');

  delBtn.textContent = 'X'
  delBtn.addEventListener('click', function(event){


    this.parentElement.remove();

  })

  newLi.append(delBtn);


  // append it the list
  const list = document.getElementById('todos');

  list.append(newLi);

  // reset the input box
  inputBox.value = '';

  // set the focus
  inputBox.focus()


})




