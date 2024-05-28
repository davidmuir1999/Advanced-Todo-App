export function addTodo(todoText) {
    const todoList = document.getElementById('todo-list');
    const todoItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-grip-lines';

    const taskText = document.createElement('span');
    taskText.textContent = todoText;

    todoItem.appendChild(checkbox);
    todoItem.appendChild(taskText);
    todoItem.appendChild(icon);
    
    todoList.appendChild(todoItem);
}

export function toggleTodo(todoItem) {
    todoItem.classList.toggle('completed');

}

export function editTodoItem(taskText) {
    const todoItem = taskText.parentElement;
    if (todoItem.classList.contains('completed')){
        return;
    }
    
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'edit-input';
    input.value = taskText.textContent;

    taskText.replaceWith(input);
    input.focus();

    function saveEdit() {
        const newTaskText = document.createElement('span');
        newTaskText.textContent = input.value;
        input.replaceWith(newTaskText);

        newTaskText.addEventListener('click', () => {
            editTodoItem(newTaskText);
        });
    }

    input.addEventListener('blur', saveEdit);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            saveEdit();
        }
    });
}

export function initializeDragAndDrop(){
    const todoList = document.getElementById('todo-list');

    Sortable.create(todoList, {
        animation: 150,
        ghostClass: 'sortable-ghost',
        handle: '.fa-grip-lines',
        fallbackTolerance: 3,
        swapThreshold: 0.65,
    });
}

export function taskComplete(todoItem) {
    const todoList = document.getElementById('todo-list');
    todoList.appendChild(todoItem);
}