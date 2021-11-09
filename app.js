//event element
const form = document.querySelector( 'form');
const taskList = document.querySelector('.collection');
const deleteTasksBtn = document.querySelector('#delete-tasks');

//events
form.addEventListener('submit', addTask);
taskList.addEventListener('click', deleteTask);
deleteTasksBtn.addEventListener('click', deleteTasks);

function deleteTasks(event){
    //event.target.previousElementSibling.innerHTML = '';
    //taskList.innerHTML = '';
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

function deleteTask(event){
    if(event.target.textContent === 'X'){
        if(confirm('Do you want to delete this task?')) {
            event.target.parentElement.remove();
        }
    }
}

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
    //create <a> element
    const link = document.createElement('a');
    //add css class
    link.className = 'secondary-content';
    //set href atribute to <a>
    link.setAttribute('href', '#');
    //add text content to link
    link.appendChild(document.createTextNode('X'));
    //add <a> to <li>
    li.appendChild(link);
    //add list item to ul
    const ul = document.querySelector('.collection');
    ul.appendChild(li);
    // save task
    addTaskToLocalStorage(task);
    taskInput.value = '';
    event.preventDefault();
}

function addTaskToLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(tasks);
}
