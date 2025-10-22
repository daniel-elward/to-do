import {resetListeners, displayProject, closePopup } from "./dom";
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

export function addNewProject(){

    const projectButton = document.getElementById("newProjectButton");
    const submitter = document.getElementById("newProjectSubmit");
    const formDiv = document.getElementById("newProjectForm");
    const form = document.getElementById("newProject")

    projectButton.addEventListener("click", () => {

        formDiv.style.display = "inline";
    });

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        formDiv.style.display = "none";

        let data = new FormData(form, submitter);
        
        const title = data.get("projectTitle");
        const description = data.get("projectDescription");  
        const project = new Project(title, description);

        projectArray.push(project);

        form.reset();

        //calling when addNewProject is being called here it is duplicating 
        //enteries, even if they are blank. 

        //resetListeners();

        addNewTask();
        //addNewProject();
    
        deleteProject();
        deleteTask();
    
        closePopup();
    
        displayProject(); 
    });
};

export function addNewTask(){

    const taskButton = document.querySelectorAll(".newTaskButton");
    const submitter = document.getElementById("newTaskSubmit");
    const taskForm = document.getElementById("newTask")
    const formDiv = document.getElementById("newTaskForm");

    let taskButtonID = null;

    taskButton.forEach((event) => {

        event.addEventListener("click", () => {

            formDiv.style.display = "inline";
            taskButtonID = event.id;

            // return taskButtonID;
        });
    });

    taskForm.addEventListener("submit", (event) => {

        event.preventDefault();

        formDiv.style.display = "none";

        let data = new FormData(taskForm, submitter);
        
        const title = data.get("taskTitle");
        const description = data.get("taskDescription");  
        const date = data.get("taskDate");  
        const priority = data.get("taskPriority");  

        const task = new Task(title, description, date, priority);

        const targetProjectID = taskButtonID;

        //console.log(taskButtonID)

        projectArray[targetProjectID].tasks.push(task);

        taskForm.reset();

        //calling when addNewTask is being called here it is duplicating 
        //enteries, even if they are blank. 

        //resetListeners();

        // addNewTask();
        // addNewProject();
    
        // deleteProject();
        // deleteTask();
    
        // closePopup();
    
            displayProject(); 
        });
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