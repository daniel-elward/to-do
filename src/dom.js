import {projectArray} from "./index.js";
import {addNewTask, deleteProject} from "./create.js"

const projectWrapper = document.getElementById("projectWrapper");

function clearDisplay() {

    const projectCard = document.querySelectorAll(".projectCard");

    projectCard.forEach((element) => {

        element.remove();
    });
};

function deleteProjectButton(buttonID, target) {

    const button = document.createElement("button");

    button.textContent = "Delete Project";
        button.setAttribute("class", "deleteProjectButton");
            //use name to get the array index because divID is already used
            button.setAttribute("name", `${buttonID}`);
                target.appendChild(button);
};

function newTaskButton(buttonID, target) {

    const button = document.createElement("button");

    //new task button
    button.textContent = "New Task";
        button.setAttribute("class", "newTaskButton");
            button.setAttribute("id", `${buttonID}`)
                target.appendChild(button);
};


function displayProject() {

    clearDisplay();

    projectArray.forEach(function (element){

        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const para = document.createElement("p");
        const ol = document.createElement("ol");
        const button = document.createElement("button");
        
        const projectTitle = document.createTextNode(`${element.title}`);
        const projectDescription = document.createTextNode(`${element.description}`);
        const tasks = element.tasks;

        div.setAttribute("class", "projectCard");
            projectWrapper.appendChild(div);
                h1.appendChild(projectTitle);
                    div.appendChild(h1);
                        para.appendChild(projectDescription);
                            div.appendChild(para);

        div.appendChild(ol);

        tasks.forEach(function (element) {

            const li = document.createElement("li");

            li.textContent = element.title;
                ol.appendChild(li);
        });

        //new task and delete buttons
        newTaskButton(element.id, div);
        deleteProjectButton(element.id, div);
    });
};

export function newProjectButton(){

    const button = document.createElement("button");

    button.textContent = "New Project";
        button.setAttribute("id", "newProjectButton");
            projectWrapper.appendChild(button);
};

export function resetListeners() {

    displayProject();    
    addNewTask();
    deleteProject();
};





/*

ORIGINAL CODE

export function displayProjects(project){

    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const para = document.createElement("p");
    const ol = document.createElement("ol");
    const button = document.createElement("button");

    const projectWrapper = document.getElementById("projectWrapper");
    const titleText = document.createTextNode(`${project.title}`);
    const descriptionText = document.createTextNode(`${project.description}`);
    const tasks = project.tasks;

    div.classList.add("projectCard");
        projectWrapper.appendChild(div);

    const projectCard = document.querySelector(".projectCard");

    h1.appendChild(titleText);
        projectCard.appendChild(h1);

    para.appendChild(descriptionText);
        projectCard.appendChild(para);

    //ol.setAttribute("id", "taskTitles");
    ol.classList.add("taskTitles");
        projectCard.appendChild(ol);

    const taskList = document.querySelector(".taskTitles");

    tasks.forEach(element => {

        // var needs to be here, li gets overwritten if not
        const li = document.createElement("li");

        li.textContent = element.title;
            taskList.appendChild(li);
    });

    // button.setAttribute("id", "newTaskButton");
    //     button.setAttribute("name", `${project.title}`);
    //         projectCard.appendChild(button);
    //             button.textContent = "New Task";
};

export function newProjectButton() {

    const button = document.createElement("button");
    const projectWrapper = document.getElementById("projectWrapper");

    button.setAttribute("id", "newProjectButton");
        projectWrapper.appendChild(button);
            button.textContent = "New Project";
};

*/