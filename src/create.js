import {displayProject} from "./dom";
import {projectArray} from "./index.js";

//id counters for projects and tasks
let projectCounter = 0;
let taskCounter = 0;

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
        this.id = taskCounter++; //id number = position in array
    };
};

export function createProject(){

    const project = new Project(prompt("Title"), prompt("Description"))

    return project;
};

//new project button event
export function addNewProject(){

    const projectButton = document.getElementById("newProjectButton");

    projectButton.addEventListener("click", () => {

        const ProjectTitle = prompt("Project Title");
        const ProjectDescription = prompt("Project Description");

        const project = new Project(ProjectTitle, ProjectDescription);
        
        projectArray.push(project);

        console.log(projectArray)

        displayProject();
        addNewTask();
    });
};

//new task button event
export function addNewTask(){

    const taskButton = document.querySelectorAll(".newTaskButton");

    for (let i = 0; i < taskButton.length; i++) {

        taskButton[i].addEventListener("click", (event) => {

            console.log(event.target.id);

            const taskTitle = prompt("Task Title");
            const taskDescription = prompt("Task Description");
            const taskDate = prompt("Task DueDate");
            const taskPriority = prompt("Task Priority");

            const targetProjectID = event.target.id;

            const task = new Task(taskTitle, taskDescription, taskDate, taskPriority);

            projectArray[targetProjectID].tasks.push(task);

            displayProject();
            addNewTask();
        });
    };
};




/*

ORIGINAL CODE


export class Project{

    constructor(title, description) {

        this.title = title;
        this.description = description;
        this.tasks = [];
    };
};

export class Task{

    constructor(title, description, dueDate, priority) {

        this.title = title;
        this.description = description;
        this.dueDate = "22-03-2044";
        this.priority = priority;
    };
};

export function addTask(target) {

    const foo = document.getElementById("newTaskButton");

    foo.addEventListener("click", (target) => {

        const newTask = new Task(`${prompt("Title")}`, `${prompt("Description")}`, "date", `${prompt("Priority")}`);
        
            defaultProject.tasks.push(newTask);
    });
};

export function addProject() {

    const newProjectButton = document.getElementById("newProjectButton");

    const createProject = null;
     console.log(createProject)

    newProjectButton.addEventListener("click", () => {

        const createProject = new Project(`${prompt("Title")}`, `${prompt("Description")}`);
        console.log(createProject)

        return createProject;
    });
};

*/