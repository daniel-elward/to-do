import {displayProject, sendToStorage, getFromStorage } from "./dom";

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
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = false;
    };
};

export function addNewProject(){

    const projectButton = document.getElementById("newProjectButton");
    const submitter = document.getElementById("newProjectSubmit");
    const formDiv = document.getElementById("newProjectForm");
    const form = document.getElementById("newProject")

    projectButton.addEventListener("click", () => {

        formDiv.style.display = "inline";
    });

    form.addEventListener("submit", (event) => {

        formDiv.style.display = "none";

        let data = new FormData(form, submitter);
        
        const title = data.get("projectTitle");
        const description = data.get("projectDescription");
        const project = new Project(title, description);

        sendToStorage(title, project);

        form.reset();

        displayProject();

        form.preventDefault();
    });
};

export function addNewTask(){

    const taskButton = document.querySelectorAll(".newTaskButton");
    const submitter = document.getElementById("newTaskSubmit");
    const taskForm = document.getElementById("newTask")
    const formDiv = document.getElementById("newTaskForm");

    let taskButtonTitle = null;

    document.addEventListener("click", (event => {

        if (event.target.matches(".newTaskButton")){

            formDiv.style.display = "inline";
            taskButtonTitle = event.target.title;
        };
    }));

    taskForm.addEventListener("submit", (event) => {

        formDiv.style.display = "none";

        let data = new FormData(taskForm, submitter);

        const title = data.get("taskTitle");
        const description = data.get("taskDescription");  
        const date = data.get("taskDate");  
        const priority = data.get("taskPriority");  

        const task = new Task(title, description, date, priority);

        const targetProject = getFromStorage(taskButtonTitle);

        targetProject.tasks.push(task);

        sendToStorage(targetProject.title, targetProject);
        
        taskForm.reset();

        displayProject();

        taskForm.preventDefault();
    });
};

export function deleteProject(){

    document.addEventListener("click", (event) => {

        if (event.target.matches(".deleteProjectButton")){

            const projectKey = event.target.name;
            localStorage.removeItem(projectKey);
            displayProject();
        };
    });
};

export function deleteTask(){

    document.addEventListener("click", (event) => {

        if (event.target.matches(".deleteTaskButton")){

            const taskArrayIndex = event.target.name;
            const projectKey = event.target.value;
            const project = getFromStorage(projectKey);

            const taskToRemove = project.tasks.splice(taskArrayIndex, 1);
            project.tasks.push(taskToRemove[0]);
            project.tasks.pop();

            sendToStorage(project.title, project)

            displayProject();
        };
    });
};