import {resetListeners} from "./dom";
import {projectArray} from "./index.js";

//id counters for projects and tasks
let projectCounter = 0;

export class Project{

    constructor(title, description) {

        this.title = title;
        this.description = description;
        this.tasks = [];
        this.complete = false;
        this.id = projectCounter++; //id number = position in array
    };
};

export class Task{

    constructor(title, description, dueDate, priority) {

        this.title = title;
        this.description = description;
        this.dueDate = "22-03-2044";
        this.priority = priority;
        this.complete = false;
    };
};

export function createProject(){

    const project = new Project(prompt("Title"), prompt("Description"));

    resetListeners();
};

//new project button event
export function addNewProject(){

    const projectButton = document.getElementById("newProjectButton");

    projectButton.addEventListener("click", () => {

        const ProjectTitle = prompt("Project Title"); //update to GUI
        const ProjectDescription = prompt("Project Description"); //update to GUI

        const project = new Project(ProjectTitle, ProjectDescription);
        
        projectArray.push(project);

        resetListeners()
    });
};

//new task button event
export function addNewTask(){

    const taskButton = document.querySelectorAll(".newTaskButton");

    for (let i = 0; i < taskButton.length; i++) {

        taskButton[i].addEventListener("click", (event) => {

            const taskTitle = prompt("Task Title");
            const taskDescription = prompt("Task Description");
            const taskDate = prompt("Task DueDate");
            const taskPriority = prompt("Task Priority");

            const targetProjectID = event.target.id;

            const task = new Task(taskTitle, taskDescription, taskDate, taskPriority);

            projectArray[targetProjectID].tasks.push(task);

            resetListeners()
        });
    };
};

export function deleteProject(){

    const deleteButton = document.querySelectorAll(".deleteProjectButton");
    let projectToRemove = null;

    deleteButton.forEach((element) => {

        element.addEventListener("click", () => {

            //element.name corresponds to the array index of the project to be deleted
            const projectToMove = projectArray.splice(element.name, 1);

            //need to specify index otherwise the whole array is added.
            projectArray.push(projectToMove[0]);

            projectArray.pop();

            resetListeners()
        });
        
    });    
};

export function deleteTask(){

    const deleteButton = document.querySelectorAll(".deleteTaskButton");

    deleteButton.forEach((element) => {

        const tasks = projectArray[element.name];
        
        element.addEventListener("click", () => {

            const taskID = element.name;
            const projectID = element.value;

            //element.name corresponds to the array index of the project to be deleted
            const projectToMove =  projectArray[projectID].tasks.splice(taskID, 1);

            //need to specify index otherwise the whole array is added.
            projectArray[projectID].tasks.push(projectToMove[0]);

            projectArray[projectID].tasks.pop();

            resetListeners()
        });
        
    });    
};