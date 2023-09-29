const boardContainer = document.querySelector('.borard');
const addColumnButton = document.querySelector('.addColumn');

addColumnButton.addEventListener('click', () => {
	const kanbanBoard = document.createElement('div');
	kanbanBoard.classList.add('kanbanBoard');

	const headerDiv = document.createElement('div');
	headerDiv.classList.add('kbHead');
	const h4 = document.createElement('h4');
	h4.textContent = prompt('give a name for this board');
	if (!h4.textContent) {
		return alert('Please enter the name');
	}
	const deleteIcon = document.createElement('i');
	deleteIcon.classList.add('ri-delete-bin-line');
	headerDiv.appendChild(h4);
	headerDiv.appendChild(deleteIcon);

	// Create the task list container
	const taskContainer = document.createElement('div');
	taskContainer.classList.add('kbAtask');
	const itemList = document.createElement('ul');
	itemList.id = 'items';
	taskContainer.appendChild(itemList);

	// Create the add task button
	const addTaskButton = document.createElement('div');
	addTaskButton.classList.add('kbAddTask');
	const addIcon = document.createElement('i');
	addIcon.classList.add('ri-add-line');
	const addTitle = document.createElement('h4');
	addTitle.textContent = 'Add Task';
	addTaskButton.appendChild(addIcon);
	addTaskButton.appendChild(addTitle);

	// Append all elements to the kanban board
	kanbanBoard.appendChild(headerDiv);
	kanbanBoard.appendChild(taskContainer);
	kanbanBoard.appendChild(addTaskButton);

	// Append the kanban board to the board container
	boardContainer.appendChild(kanbanBoard);

	// Add event listener for addTaskButton within the dynamically added Kanban board
	const addTaskButtons = kanbanBoard.querySelectorAll('.kbAddTask');

	addTaskButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const ul = button.parentNode.querySelector('ul');
			const li = document.createElement('li');
			const h4 = document.createElement('h4');
			const i = document.createElement('i');

			h4.textContent = prompt('Please add your task:');
			if (!h4.textContent) {
				return alert('Please enter a task');
			}
			i.classList.add('ri-delete-back-2-line');

			li.appendChild(h4);
			li.appendChild(i);
			ul.appendChild(li);

			i.addEventListener('click', () => {
				if (confirm('Are you sure you want to delete this task?')) {
					li.remove();
				}
			});
		});
	});

	deleteIcon.addEventListener('click', () => {
		if (
			confirm(`Are you sure you want to delete this ${h4.textContent} board?`)
		) {
			kanbanBoard.remove();
		}
	});

	const list1 = document.querySelectorAll('#items');
	const list2 = document.getElementById('move');

	list1.forEach((lis) => {
		const sortable1 = new Sortable(lis, {
			animation: 150,
		});
	});

	const sortable2 = new Sortable(list2, {
		animation: 150,
	});
});

// const boardContainer = document.querySelector('.borard');
// const addColumnButton = document.querySelector('.addColumn');

// function createTask(liText) {
// 	const li = document.createElement('li');
// 	const h4 = document.createElement('h4');
// 	const deleteIcon = document.createElement('i');

// 	h4.textContent = liText;
// 	deleteIcon.classList.add('ri-delete-back-2-line');

// 	li.appendChild(h4);
// 	li.appendChild(deleteIcon);

// 	deleteIcon.addEventListener('click', () => {
// 		if (confirm('Are you sure you want to delete this task?')) {
// 			li.remove();
// 		}
// 	});

// 	return li;
// }

// function addTaskToBoard(ul, addTaskButton) {
// 	addTaskButton.addEventListener('click', () => {
// 		const liText = prompt('Please add your task:');
// 		if (!liText) {
// 			return alert('Please enter a task');
// 		}
// 		const li = createTask(liText);
// 		ul.appendChild(li);
// 	});
// }

// addColumnButton.addEventListener('click', () => {
// 	const kanbanBoard = document.createElement('div');
// 	kanbanBoard.classList.add('kanbanBoard');

// 	const h4Text = prompt('Give a name for this board');
// 	if (!h4Text) {
// 		return alert('Please enter the name');
// 	}

// 	const headerDiv = document.createElement('div');
// 	headerDiv.classList.add('kbHead');
// 	const h4 = document.createElement('h4');
// 	h4.textContent = h4Text;
// 	const deleteIcon = document.createElement('i');
// 	deleteIcon.classList.add('ri-delete-bin-line');
// 	headerDiv.appendChild(h4);
// 	headerDiv.appendChild(deleteIcon);

// 	const taskContainer = document.createElement('div');
// 	taskContainer.classList.add('kbAtask');
// 	const itemList = document.createElement('ul');
// 	itemList.id = 'items';
// 	taskContainer.appendChild(itemList);

// 	const addTaskButton = document.createElement('div');
// 	addTaskButton.classList.add('kbAddTask');
// 	const addIcon = document.createElement('i');
// 	addIcon.classList.add('ri-add-line');
// 	const addTitle = document.createElement('h4');
// 	addTitle.textContent = 'Add Task';
// 	addTaskButton.appendChild(addIcon);
// 	addTaskButton.appendChild(addTitle);

// 	kanbanBoard.appendChild(headerDiv);
// 	kanbanBoard.appendChild(taskContainer);
// 	kanbanBoard.appendChild(addTaskButton);

// 	boardContainer.appendChild(kanbanBoard);

// 	const list1 = itemList;
// 	const list2 = document.getElementById('move');
// 	const sortable1 = new Sortable(list1, {
// 		animation: 150,
// 	});

// 	const addTaskButtons = kanbanBoard.querySelectorAll('.kbAddTask');
// 	addTaskButtons.forEach((button) => addTaskToBoard(list1, button));

// 	deleteIcon.addEventListener('click', () => {
// 		if (confirm(`Are you sure you want to delete this ${h4Text} board?`)) {
// 			kanbanBoard.remove();
// 		}
// 	});

// 	const sortable2 = new Sortable(list2, {
// 		animation: 150,
// 	});

// 	console.log(list1);
// });