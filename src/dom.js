import {projectArray} from "./index.js";

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
            button.setAttribute("id", `deleteID${buttonID}`);
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


export function displayProject() {

    clearDisplay();

    //generates the project card element
    for (let i = 0; i < projectArray.length; i++) {

        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const para = document.createElement("p");
        const ol = document.createElement("ol");
        const button = document.createElement("button");
        
        const projectTitle = document.createTextNode(`${projectArray[i].title}`);
        const projectDescription = document.createTextNode(`${projectArray[i].description}`);

        div.classList.add("projectCard");
            projectWrapper.appendChild(div);

        //node list, iterate through to add data to each project card
        const projectCard = document.querySelectorAll(".projectCard");

            // loop iterates through the node list
            // looping through the nodelist of multiple .class divs
            // allows the loop to add the correct data into the correct 
            // div.

            // Before this all of the data was getting pushed into the first with 
            // a matching .class name
            for (let j = 0; j < projectCard.length; j++) {

                h1.appendChild(projectTitle);
                    projectCard[i].appendChild(h1);

                para.appendChild(projectDescription);
                    projectCard[i].appendChild(para);

                ol.classList.add("taskTitles");
                    projectCard[i].appendChild(ol);
                    
                const taskList = projectArray[i].tasks;

                //loop  through and display task titles
                for (let k = 0; k < taskList.length; k++){
                    
                    // var needs to be here, li gets overwritten if not
                    const li = document.createElement("li");

                    li.textContent = taskList[k].title;
                        ol.appendChild(li);
                };
            };

            //new task and delete buttons
            newTaskButton(projectArray[i].id, projectCard[i]);
            deleteProjectButton(projectArray[i].id, projectCard[i]);
    };
};

export function newProjectButton(){

    const button = document.createElement("button");

    button.textContent = "New Project";
        button.setAttribute("id", "newProjectButton");
            projectWrapper.appendChild(button);
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