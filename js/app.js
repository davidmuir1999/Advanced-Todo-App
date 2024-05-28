import { addTodo, toggleTodo, editTodoItem, initializeDragAndDrop, taskComplete} from './utils.js';

const addButton = document.getElementById('add-btn');
const todoInput = document.getElementById('new-todo');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', () => {
    addTodoItem();
});

todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTodoItem();
    }
});

todoList.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
        const todoItem = e.target.parentElement;
        toggleTodo(todoItem);
        taskComplete(todoItem);
    }
});

todoList.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
        editTodoItem(e.target);
    }
});

function addTodoItem() {
    const todoText = todoInput.value;
    if (todoText.trim() !== '') {
        addTodo(todoText);
        todoInput.value = '';
        initializeDragAndDrop();

    }
}

initializeDragAndDrop();
taskComplete(todoItem);