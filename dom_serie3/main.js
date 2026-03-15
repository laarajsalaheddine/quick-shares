console.log("entered main file ..........");

// je manipule les inputs de fomulaire
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const priority = document.querySelector('#priority');
const taskTypeRadioButtons = document.querySelectorAll('.task-type');
const completed = document.querySelector('#completed');
const taskId = document.querySelector('#taskId');
const save = document.querySelector('#save');
const taskList = document.querySelector('#taskList');

const listDesTache = [];
// localstorage


function addInfoName(infoName = "") {
    return infoName.toUpperCase();
}



function generateId() {
    let id = 1;
    if (listDesTache.length > 0) {
        let lastElement = listDesTache[listDesTache.length - 1];
        id = lastElement.id + 1;
    }
    return id;
}

function ajouterElementDansListe(taskObjectAsArgument = {}) {
    if (!taskObjectAsArgument)
        return "Not Found";

    let newTaskElement = null;
    newTaskElement = document.createElement("div");


    const idP = document.createElement("p");
    idP.id = "object-id";
    idP.textContent = taskObjectAsArgument.id;

    newTaskElement.classList.add('task-card')
    const titleP = document.createElement("p");
    titleP.textContent = addInfoName("Title : ") + taskObjectAsArgument.title;

    const decriptionP = document.createElement("p");
    decriptionP.textContent = addInfoName("Description : ") + taskObjectAsArgument.description;

    const emailP = document.createElement("p");
    emailP.textContent = addInfoName("Email : ") + taskObjectAsArgument.email;

    const passwordP = document.createElement("p");
    passwordP.textContent = addInfoName("Password : ") + taskObjectAsArgument.password;

    const priorityP = document.createElement("p");
    priorityP.textContent = addInfoName("Priotité : ") + taskObjectAsArgument.priority;

    const completedP = document.createElement("p");
    completedP.textContent = taskObjectAsArgument.completed; // true/false

    const taskTypeP = document.createElement("p");
    taskTypeP.textContent = addInfoName("Type : ") + taskObjectAsArgument.type;

    const updateBtn = document.createElement("button");
    updateBtn.id = "editer";
    updateBtn.textContent = "Editer";

    const deleteBtn = document.createElement("button");
    deleteBtn.id = "supprimer";
    deleteBtn.textContent = "supprimer";

    deleteBtn.addEventListener('click', () => {
        // selection ==> action
        const cardToDelete = deleteBtn.closest(".task-card");
        cardToDelete.remove();
    });

    updateBtn.addEventListener('click', () => {
        // selection ==> action
        const idToEdit = deleteBtn.parentNode.children[0].textContent;
        let targetObjectAfterFilter = listDesTache.filter((elementEnCour) => parseInt(elementEnCour.id) === parseInt(idToEdit));
        targetObjectAfterFilter = targetObjectAfterFilter[0]

        title.value = "____Editing....." + targetObjectAfterFilter.title ;
        description.value = "____Editing....." + targetObjectAfterFilter.description ;
        email.value = "____Editing....." + targetObjectAfterFilter.email ;
        
        console.log(targetObjectAfterFilter[0])
    });

    newTaskElement.append(idP, titleP, decriptionP, emailP, passwordP, priorityP, taskTypeP, completedP, updateBtn, deleteBtn);

    taskList.appendChild(newTaskElement);
}


// je manipule la list 
save.addEventListener("click", () => {
    let titleValue = title.value;
    let descriptionValue = description.value;
    let emailValue = email.value;
    let passwordValue = password.value;
    let priorityValue = priority.value;
    let completedValue = "Tâche en cour";
    let typeValue = title.value;
    let taskIdValue = taskId.value;
    if (completed.checked)
        completedValue = "Tâche terminé"; // true/false
    for (let i = 0; i < taskTypeRadioButtons.length; i++) {
        const oneRadioButoon = taskTypeRadioButtons[i];
        if (oneRadioButoon.checked) {
            typeValue = oneRadioButoon.value
        }
    }

    let taskObject = {
        id: generateId(),
        title: titleValue,
        description: descriptionValue,
        email: emailValue,
        password: passwordValue,
        priority: priorityValue,
        type: typeValue,
        completed: completedValue
    }
    listDesTache.push(
        taskObject
    );

    // id vide == Mode de creation
    if (taskIdValue === "") {
        // vider la liste au niveau HTML
        taskList.innerHTML = "";
        listDesTache.forEach((elt) => {
            ajouterElementDansListe(elt);
        });
    } else {
        // id non vide == Mode de modification
        alert('element exits deja');
    }

})