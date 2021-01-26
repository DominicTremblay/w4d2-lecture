// Detect the submit of the form

const frm = document.querySelector("#new-todo-frm");

frm.addEventListener("submit", function(event) {
  // preventing the submission of the form
  event.preventDefault();
  // Expecting the 'this' to be the form element
  // Extract the text content from the input box
  // using the elements collection on the form
  const todoInput = this.elements.todo;
  const todoContent = todoInput.value;
  // create a new <li> with the text content of that input box
  const newLi = document.createElement("li");
  newLi.textContent = todoContent + " ";

  // targetting the list of todos (ul)
  // target the ul on the page and add the newLi to it
  const todoList = document.querySelector("#todos");

  // Create a button and add it to the <li> element
  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  // adding an event listener for the click on the delete button

  delBtn.addEventListener("click", function(event) {
    // remove the child from the ul
    // todoList.removeChild(newLi);

    // this is preferred way
    todoList.removeChild(this.parentElement);
  });

  // add the button to the new li
  newLi.appendChild(delBtn);

  // Add the new li to the ul
  todoList.appendChild(newLi);

  // reset the text content of the input text
  todoInput.value = "";
});





// Manipulating documents Documentation
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
// https://developer.mozilla.org/en-US/docs/Web/API/Document
