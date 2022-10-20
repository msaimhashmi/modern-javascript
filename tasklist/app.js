// Define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners 
loadAllEventListeners();

// Load all event listeners
function loadAllEventListeners(){
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);

    // Add task event
    form.addEventListener('submit', addTask);

    // Remove task event
    taskList.addEventListener('click', removeTask);

    // Clear tasks event
    clearBtn.addEventListener('click', clearTasks);

    // Filter task event
    filter.addEventListener('keyup', filterTasks);
}

// Get tasks
function getTasks()
{
    let tasks;
    // lets keep in mind that localstorage save only in string 
    // we need to convert data when we get from localstorage into JSON.parse when it comes out 
    // then push new task to JSON value
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(task));
        
        // Create a new link element
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item secondary-content';
        // Create inner HTML icon tag
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append the link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);
    });
}

// Add task
function addTask(e){
    if(taskInput.value === '')
    {
        alert('Task is empty! Kindly add a task');
        return;
    }

    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    
    // Create a new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Create inner HTML icon tag
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Store task in local storage
    storeTaskInLocalStorage(taskInput.value);

    // Clear the input
    taskInput.value = '';

    e.preventDefault();
}

// Store task
function storeTaskInLocalStorage(task){
    let tasks;
    // lets keep in mind that localstorage save only in string 
    // we need to convert data when we get from localstorage into JSON.parse when it comes out 
    // then push new task to JSON value
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    // convert JSON value to string to save data in localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure you want to delete?'))
        {
            e.target.parentElement.parentElement.remove();
            
            // Remove task from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// Remove task from local storage
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    // lets keep in mind that localstorage save only in string 
    // we need to convert data when we get from localstorage into JSON.parse when it comes out 
    // then push new task to JSON value
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            // first parameter index of item
            // second parameter count of item
            tasks.splice(index, 1);
        }
    });

    // convert JSON value to string to save data in localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear task
function clearTasks(){
    // taskList.innerHTML = '';

    // Fast
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    // Clear tasks from local storage
    clearTasksFromLocalStorage();
}

// Clear tasks from local storage
function clearTasksFromLocalStorage(){
    localStorage.clear();
}

// Filter task
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text) != -1)
        {
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
        // console.log(item.toLowerCase().indexOf(text));
    });
}