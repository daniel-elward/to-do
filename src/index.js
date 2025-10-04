import "./style.css";
import {Project, Task} from "./create.js";
import {displayProjects} from "./dom.js";

//default project
const defaultProject = new Project("My Daily Tasks", "This project holds the daily to-dos");

//default tasks
const defaultTaskOne = new Task("task 1", "description1", "date", "high priority");
const defaultTaskTwo = new Task("task 2", "description2", "date", "normal priority");
const defaultTaskThree = new Task("task 3", "description3", "date", "low priority");

defaultProject.taskOne = defaultTaskOne;
defaultProject.taskTwo = defaultTaskTwo;
defaultProject.taskThree = defaultTaskThree;

console.log(defaultProject)

displayProjects(defaultProject)
