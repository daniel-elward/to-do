//common dom creation 
const div = document.createElement("div");
const h1 = document.createElement("h1");
const para = document.createElement("p");
const ol = document.createElement("ol");
const li = document.createElement("li");

export function displayProjects(project){

    const projectWrapper = document.getElementById("projectWrapper");
    const titleText = document.createTextNode(`${project.title}`);
    const descriptionText = document.createTextNode(`${project.description}`);

    div.classList.add("projectCard")
        projectWrapper.appendChild(div);

    const projectCard = document.querySelector(".projectCard");

    h1.appendChild(titleText);
        projectCard.appendChild(h1);

    para.appendChild(descriptionText);
        projectCard.appendChild(para);

    

    //displayTasks(taskTitle, taskDescription, taskDate, taskPriority)
};

// function displayTasks(taskTitle, taskDescription, taskDate, taskPriority){

//     const titleText = document.createTextNode(taskTitle);
//     const descriptionText = document.createTextNode(taskDescription);
//     const dateText = document.createTextNode(taskDate);
//     const priorityText = document.createTextNode(taskPriority);
// };