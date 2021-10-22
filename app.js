//event element
const form = document.querySelector( 'form');
//events
form.addEventListener('submit', addTask);

function addTask(event) {
    //get form input data
    const taskInput = document.querySelector('#task');
    let task = taskInput.value;
    //create <li> element
    const li = document.createElement('li');
    //add css class
    li.className = 'collection-item';
    //create text element
    const text = document.createTextNode(task);
    //add text to list item
    li.appendChild(text);
    //add list item to ul
    const ul = document.querySelector('.collection');
    ul.appendChild(li);

    console.log(ul);
    event.preventDefault();
}