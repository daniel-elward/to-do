import {projectArray} from "./index.js";
import {addNewTask, deleteProject, deleteTask, addNewProject} from "./create.js"

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

function deleteTaskButton(buttonID, projectID, target) {

    const button = document.createElement("button");

    button.textContent = "Delete Task";
        button.setAttribute("class", "deleteTaskButton");
            //use name to get the array index because divID is already used
            button.setAttribute("name", `${buttonID}`);//task ID
                button.setAttribute("value", `${projectID}`);//project ID
                    target.appendChild(button);
};

function newTaskButton(buttonTitle, target) {

    const button = document.createElement("button");

    //new task button
    button.textContent = "New Task";
        button.setAttribute("class", "newTaskButton");
            button.setAttribute("title", `${buttonTitle}`)
                target.appendChild(button);
};

//old version
// export function displayProject() {

//     clearDisplay();

//     projectArray.forEach((element) => {

//         const div = document.createElement("div");
//         const h1 = document.createElement("h1");
//         const para = document.createElement("p");
//         const ol = document.createElement("ol");
//         const button = document.createElement("button");
        
//         const projectTitle = document.createTextNode(`${element.title}`);
//         const projectDescription = document.createTextNode(`${element.description}`);
//         const tasks = element.tasks;
//         const projectID = element.id;

//         div.setAttribute("class", "projectCard");
//             projectWrapper.appendChild(div);
//                 h1.appendChild(projectTitle);
//                     div.appendChild(h1);
//                         para.appendChild(projectDescription);
//                             div.appendChild(para);

//         div.appendChild(ol);

//         tasks.forEach(function (element, index) {

//             const li = document.createElement("li");

//             li.textContent = element.title;
//                 ol.appendChild(li);
//                     //index = counter to get array index of the tasks
//                     deleteTaskButton(index, projectID, li); 
//         });

//         //new task and delete buttons
//         newTaskButton(element.id, div);
//         deleteProjectButton(element.id, div);
//     });
// };



export function displayProject() {

    clearDisplay();
    const keys = Object.keys(localStorage);
    
    for(let i = 0; i < localStorage.length; i++){

        const currentProject = getFromStorage(keys[i])

        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const para = document.createElement("p");
        const ol = document.createElement("ol");
        const button = document.createElement("button");
        
        const projectTitle = document.createTextNode(`${currentProject.title}`);
        const projectDescription = document.createTextNode(`${currentProject.description}`);
        const tasks = currentProject.tasks;
        const projectID = currentProject.id;
        const currentProjectTitle = currentProject.title;

        //console.log(tasks)

        div.setAttribute("class", "projectCard");
            projectWrapper.appendChild(div);
                h1.appendChild(projectTitle);
                    div.appendChild(h1);
                        para.appendChild(projectDescription);
                            div.appendChild(para);

        div.appendChild(ol);

        tasks.forEach((element, index) => {

            const li = document.createElement("li");

            li.textContent = element.title;
                ol.appendChild(li);
                    //index = counter to get array index of the tasks
                    deleteTaskButton(index, projectID, li); 
        });

        //new task and delete buttons
        newTaskButton(currentProjectTitle, div);
        deleteProjectButton(projectID, div);
    };
};

export function closePopup(){

    const projectButton = document.getElementsByName("newProjectForm");
    const taskButton = document.getElementsByName("newTaskForm");

    projectButton.forEach((element) => {

        element.addEventListener("click", () => {

            const projectPopup = document.getElementById(element.name);

            projectPopup.style.display = "none";
        });
    });

    taskButton.forEach((element) => {

        element.addEventListener("click", () => {

            const taskPopup = document.getElementById(element.name);

            taskPopup.style.display = "none";
        });
    });
};

export function newProjectButton(){

    const button = document.createElement("button");

    button.textContent = "New Project";
        button.setAttribute("id", "newProjectButton");
            projectWrapper.appendChild(button);
};

export function sendToStorage(title, object){

    const projectString = JSON.stringify(object);
        localStorage.setItem(title, projectString);
            // const projectDestring = JSON.parse(localStorage.getItem(title));
};

export function getFromStorage(key){

    const project = JSON.parse(localStorage.getItem(key));

    return project;
};

export function resetListeners() {

    addNewProject();
    addNewTask();
    displayProject(); 
        
    // deleteProject();
    // deleteTask();
    // closePopup();
    // addNewTask(); 

};