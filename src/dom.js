//common dom creation 
const div = document.createElement("div");
const h1 = document.createElement("h1");
const para = document.createElement("p");
const ol = document.createElement("ol");
const li = document.createElement("li");

export function displayProjects(projectTitle, projectDescription){

    const projectWrapper = document.getElementById("projectWrapper");
    const titleText = document.createTextNode(projectTitle);
    const descriptionText = document.createTextNode(projectDescription);

    div.classList.add("projectCard")
        projectWrapper.appendChild(div);

    const projectCard = document.querySelector(".projectCard");

    h1.appendChild(titleText);
        projectCard.appendChild(h1);

    para.appendChild(descriptionText);
        projectCard.appendChild(para);
};