import "./style.css";
// function createTask(title, description, dueDate, priority, notes)
import {arrayOfTasks, createTask} from "./createEntry.js";
import {addTaskBtn} from "./dom.js";


addTaskBtn.addEventListener("click", (event) => {

    event.preventDefault();

    const formInput =  new FormData(newTask);
    const taskData = Object.fromEntries(formInput);

    createTask(taskData.title, taskData.description, taskData.dueDate, taskData.priority, taskData.notes)

    console.log(arrayOfTasks)
});
