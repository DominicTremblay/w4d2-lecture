# JavaScript DOM Manipulation Cheat Sheet

## Selecting Elements from the DOM

- **Select One Element:**
  - `document.getElementById(idSelector);`
  - `document.querySelector(selector);`

- **Select Multiple Elements:**
  - `document.getElementsByTagName(tagName);`
  - `document.getElementsByName(name);`
  - `document.getElementsByClassName(classSelector);`
  - `document.querySelectorAll(selector);`

## Navigating the DOM

- `parentElement` - Access an element's parent.
- `children` - Access an element's children.
- `siblings` - Access an element's siblings.

## Manipulating a DOM Element

- **Read and Change Content:** Directly modify the text or HTML content.
- **Read and Change Attributes:** Modify attributes like `id`, `class`, `src`, etc.
- **Read and Change Styles:** Alter CSS styles directly via JavaScript.
- **Hook Event Listeners:** Attach events (click, hover, etc.) to elements.
- **Add/Remove Children Elements:** Dynamically add or remove elements from the DOM.

## Creating New DOM Element

- `document.createElement(element);` - Create a new element.
- `parentElement.append(newElement);` - Add the new element to the DOM.

## Working with Events

- Events such as click, submit, and blur can trigger actions.
- `element.addEventListener(event, eventHandler);` - Attach an event listener to an element.
