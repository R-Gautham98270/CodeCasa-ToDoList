// script.js
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        addTask();
    });

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span>${taskText}</span>
            <span class="add-date">Due Today</span>
            <button class="remove-button">Remove</button>
        `;
        addRemoveTaskListener(taskItem);

        taskList.appendChild(taskItem);
        taskInput.value = "";
        addDateClickListener(taskItem);
    }

    function addRemoveTaskListener(taskItem) {
        const removeButton = taskItem.querySelector(".remove-button");

        removeButton.addEventListener("click", function () {
            taskItem.remove();
        });
    }

    function addDateClickListener(taskItem) {
        const addDate = taskItem.querySelector(".add-date");

        addDate.addEventListener("click", function(){
            const date = prompt("Set Due Date (e.g., 'Due Today', 'Tomorrow', or a specific date): ");
            
            if(date !== null){
                addDate.textContent = date;
            }
        });
    }
});
