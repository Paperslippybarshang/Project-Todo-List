
// Get all the button icons
const deleteButton = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"> <style type="text/css"> .st0{fill:#C0CECB;} </style> <g> <g> <path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3 c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9 C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7 c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2 c0.6,0,1.1,0.5,1.1,1.1V7z"/> </g> <g> <g> <path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/> </g> <g> <path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z" /> </g> <g> <path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8 C14.6,17.7,14.3,18,14,18z"/> </g> </g> </g> </svg>`;
const completeButton = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"> <style type="text/css"> .st0{fill:none;} .st1{fill:#26B999;} </style> <rect y="0" class="noFill" width="22" height="22"/> <g> <path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8 c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/> </g> </svg>`;



// Write a function that accepts list object and creates <li> element in HTML file.
const createListElement = (item) => {
  const list = document.querySelector('ul');
  
  // create a list element.
  const li = document.createElement('li');
  li.setAttribute('class', 'list_items');
  li.innerHTML = `
    ${item}
    <div class="list_buttons">
      <button type="button" class="delete">
        ${deleteButton}
      </button>
      <div class="divider"></div>
      <button type="button" class="complete">
        ${completeButton}
      </button>
    </div>
  `
  list.append(li);
  
}

// Event-submit
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
  // Store the input values from the input element into a variable.
  const input = document.querySelector('.input');
  event.preventDefault(); // prevent app from auto-refreshing
  const item = input.value.trim();
  // call addToList function to append the item to the array - listItems[]
  if(item !== '') {
    createListElement(item);
    input.value = ''; // resets the value
    input.focus(); // removes the focus
  }
});

// Event-Delete/Complete
const list = document.querySelector('ul');
// Listens for click event on the list item.
list.addEventListener('click', event => {
  // if clicked element(button) contains 'complete' class,
  if(event.target.classList.contains('complete')) {
    // add 'completed' class to the button and cross out the item
    event.target.classList.toggle('completed')
    event.target.parentNode.parentNode.classList.toggle('completed')
  }
  // if clicked element(button) contains 'delete' class,
  if(event.target.classList.contains('delete')) {
    //remove the entire list item.
    event.target.parentNode.parentNode.remove()
  }
})


//Unused Code
// Create an array that will store the list elements
// const listItems = [];
// Write a function that will create a list object, add the list elements to the array and render them.
// const addToList = (item) => {
  // Create an object to store the list items
  // const listObj = {
  //   item,
  //   completed: false
  // };
  // listItems.push(listObj);
//   createListElement(item);
// }

