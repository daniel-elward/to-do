import "./style.css";
import {createProject, Project, Task, addNewProject, addNewTask, deleteProject} from "./create.js";
import {resetListeners, newProjectButton} from "./dom.js";

export const projectArray = [];

//default project
const defaultProject = new Project("My Daily Tasks", "Here are all of todays tasks.")
const defaultProjectTwo = new Project("Project Two", "Project Two description")
const defaultProjectThree = new Project("Project Three", "Project Three description")
projectArray.push(defaultProject);
projectArray.push(defaultProjectTwo);
projectArray.push(defaultProjectThree);

//default tasks
const defaultTaskOne = new Task("task 1", "description1", "date", "high priority");
const defaultTaskTwo = new Task("task 2", "description2", "date", "normal priority");
const defaultTaskThree = new Task("task 3", "description3", "date", "low priority");
const defaultTaskFour = new Task("task 4", "description4", "date", "low priority");
const defaultTaskFive = new Task("task 5", "description6", "date", "low priority");
const defaultTaskSix = new Task("task 6", "description6", "date", "low priority");

//default project array
projectArray[0].tasks.push(defaultTaskOne);
projectArray[0].tasks.push(defaultTaskTwo);
projectArray[1].tasks.push(defaultTaskThree);
projectArray[1].tasks.push(defaultTaskFour);
projectArray[2].tasks.push(defaultTaskFive);
projectArray[2].tasks.push(defaultTaskSix);

newProjectButton();
addNewProject();


resetListeners();
/*

ORIGINAL CODE

import "./style.css";
import {Project, Task, addTask, addProject} from "./create.js";
import {displayProjects, newProjectButton} from "./dom.js";
import { electron } from "webpack";

//default project
const defaultProject = new Project("My Daily Tasks", "This project holds the daily to-dos");
const defaultProjectTwo = new Project("Test Second Project", "This project holds the second Project");

//default tasks
const defaultTaskOne = new Task("task 1", "description1", "date", "high priority");
const defaultTaskTwo = new Task("task 2", "description2", "date", "normal priority");
const defaultTaskThree = new Task("task 3", "description3", "date", "low priority");
const defaultTaskFour = new Task("task 4", "description4", "date", "low priority");

//default project array
defaultProject.tasks.push(defaultTaskOne);
defaultProject.tasks.push(defaultTaskTwo);
defaultProject.tasks.push(defaultTaskThree);
defaultProject.tasks.push(defaultTaskFour);

//project array
const projectsArray = [defaultProject, defaultProjectTwo];

newProjectButton();


// for (let i = 0; i = projectsArray.length; i++){

//     displayProjects(projectsArray[i])
// };

projectsArray.forEach(element => {

    displayProjects(element);
});

// displayProjects(projectsArray[0])
// displayProjects(projectsArray[1])

//displayProjects(defaultProjectTwo)

//listens for add task click
addTask();
addProject();


*/