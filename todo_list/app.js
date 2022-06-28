let inputTask = document.getElementById('input-task');
let addTodoBtn = document.getElementById('add-todo-btn');
let todos = document.getElementById('todos');

addTodoBtn.addEventListener('click', function() {
	let todo = document.createElement('li');
	let todoValue = document.createTextNode(inputTask.value);
	let deleteBtn = document.createElement('button');
	let deleteValue = document.createTextNode('delete');
	if (todoValue.length == 0) {
		alert('Please write a todo');
		return;
	}

	todo.appendChild(todoValue);
	deleteBtn.appendChild(deleteValue);
	todo.appendChild(deleteBtn);
	todos.appendChild(todo);
	inputTask.value = '';

	deleteBtn.addEventListener('click', function(e) {
		todo.remove();
	});
});
