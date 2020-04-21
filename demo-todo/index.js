
// Add a submit event listener on the form


const form = document.getElementById("new-todo-frm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  // get the content of the input box
  const newTodo = this.elements.todo;

  // create a new list item element with a delete button

  const li = document.createElement("li");
  li.textContent = `${newTodo.value} `;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";

  // Add the delete button to the li

  li.appendChild(delBtn);

  // add the new li to the ul of todos
  const todoList = document.getElementById("todos");

  todoList.appendChild(li);

  // reset the input box
  newTodo.value = "";

  // add an event listener on the delete button
  // puts back the focus on the new todo input

  delBtn.addEventListener("click", function(event) {
    todoList.removeChild(li);
    newTodo.focus();
  });
});

// Manipulating documents Documentation
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
// https://developer.mozilla.org/en-US/docs/Web/API/Document
