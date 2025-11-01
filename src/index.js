import "./style.css";
import {Project, Task, addNewProject, addNewTask, deleteProject, deleteTask} from "./create.js";
import {resetListeners, sendToStorage, newProjectButton, displayProject, closePopup, getFromStorage} from "./dom.js";

(function setDefaultProject(){

    const defaultProject = getFromStorage("My Daily");

    if (defaultProject === null){

        const defaultProject = new Project("My Daily Tasks", "Here are all of todays tasks.")

        const projectString = JSON.stringify(defaultProject);
        localStorage.setItem("My Daily Tasks", projectString);
    } 
}());

newProjectButton();
closePopup();

displayProject();

addNewProject()
addNewTask();
deleteProject();
deleteTask();