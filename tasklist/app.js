// Tasklist [PART 1] - UI & Add task items

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
    
    // Add task event
    form.addEventListener('submit', addTask);
}

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

    // Clear the input
    taskInput.value = '';

    e.preventDefault();
}