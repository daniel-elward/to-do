import {addNewTask, addNewProject} from "./create.js"

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

    button.innerHTML = "&#10060";
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

function expandTaskButton(buttonID, projectID, target){

    const button = document.createElement("button");

    button.innerHTML = "&#10067";
        button.setAttribute("class", "expandTaskButton");
            //use name to get the array index because divID is already used
            button.setAttribute("name", `${buttonID}`);//task ID
                button.setAttribute("value", `${projectID}`);//project ID
                    target.appendChild(button);
};

export function expandTask(){

    const title = document.querySelector(".taskTitle");
    const description = document.querySelector(".taskDescription");
    const date = document.querySelector(".taskDueDate");
    const priority = document.querySelector(".taskPriority");

    let project = null;

    document.addEventListener("click", (event) => {

        if (event.target.matches(".expandTaskButton")){
            
            const taskIndex = event.target.name;
            const popupDiv = document.getElementById("taskPopup");
            
            project = getFromStorage(event.target.value);

            const task = project.tasks;

            title.innerText = task[taskIndex].title;
            description.innerText = task[taskIndex].description;
            date.innerText = task[taskIndex].dueDate;
            priority.innerText = task[taskIndex].priority;

            popupDiv.style.display = "inline";
        };
    });
};

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

        div.setAttribute("class", "projectCard");
            projectWrapper.appendChild(div);
                h1.appendChild(projectTitle);
                    div.appendChild(h1);
                        para.appendChild(projectDescription);
                            div.appendChild(para);

        div.appendChild(ol);
            ol.setAttribute("class", "taskList")

        tasks.forEach((element, index) => {

            const li = document.createElement("li");
            const priorityLevel = element.priority;

            li.textContent = element.title;
                ol.appendChild(li);

                    if (priorityLevel === "lowPriority"){

                        li.classList.add("lowPriority")
                    } else if (priorityLevel === "medPriority"){

                        li.classList.add("mediumPriority")
                    } else if (priorityLevel === "highPriority"){

                        li.classList.add("highPriority")
                    };

                    //index = counter to get array index of the tasks
                    deleteTaskButton(index, currentProjectTitle, li);
                    expandTaskButton(index, currentProjectTitle, li);
        });

        //new task and delete buttons
        newTaskButton(currentProjectTitle, div);
        deleteProjectButton(currentProjectTitle, div);
        
    };
};

export function closePopup(){

    const projectButton = document.getElementsByName("newProjectForm");
    const taskButton = document.getElementsByName("newTaskForm");
    const taskExpand = document.getElementsByName("taskPopup");

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

    taskExpand.forEach((element) => {

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