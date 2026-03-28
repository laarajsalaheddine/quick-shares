/**** Exercice 1 *****/
// Q1 
const form = document.getElementById('task-form'); // input text
const title = document.getElementById('title'); // input text
const email = document.getElementById('email'); // input email
const description = document.querySelector('#description'); // zone de texte
const password = document.querySelector('#password'); // input password
const priority = document.getElementById('priority'); // select (dropdown)
const listRadioButton = document.querySelector('input[name="type"]:checked'); // input radio // type de la tache
const completed = document.querySelector('#completed'); // input checkbox
const addBtn = document.querySelector('#addBtn'); // button
const taskTable = document.querySelector('.task-table'); // Element
// const taskTableBody = taskTable.children[1]; // html element
const taskTableBody2 = taskTable.querySelector('tbody');
const emptyRow = document.getElementById('empty-row');

// Ajouter des ligne
function afficherListe(donnee) {
    // type de contneu = text ==> textContent / innerText
    // type de contneu = html ==> innerHTML
    emptyRow.remove();

    const tr = document.createElement("tr"); // <tr><td></td>.....</tr> 

    const tdTitre = document.createElement("td"); // <td></td>   
    tdTitre.textContent = donnee.title;

    const tdEmail = document.createElement("td"); // <td></td>   
    tdEmail.textContent = donnee.email;

    const tdDescription = document.createElement("td"); // <td></td>   
    tdDescription.textContent = donnee.description;

    const tdPriority = document.createElement("td"); // <td></td>   
    tdPriority.textContent = donnee.priority;

    const tdType = document.createElement("td"); // <td></td>   
    tdType.textContent = donnee.type;

    const tdCompleted = document.createElement("td"); // <td></td>   
    tdCompleted.textContent = donnee.completed;

    const tdAction = document.createElement("td"); // <td></td> 
    tdAction.innerHTML = `
        <button>Editer</button>
        <button class="delete">Supprimer</button>
    `;


    tr.appendChild(tdTitre)
    tr.append(tdEmail, tdDescription, tdPriority, tdType, tdCompleted, tdAction)

    taskTableBody2.appendChild(tr);
}

// vider la liste
function reinitialiserListe() {
    // if (!confirm('tu veux reinitialiser le formulaire')) {
    //     return "";
    // }
    /*
    title.value = "entez un titre ";
    email.value = "";
    description.value = "";
    password.value = "";
    priority.selectedIndex = 3; // indique l'option selectionnée dasn une liste dérounlante / une select
    // priority.value = "";
    document.querySelectorAll('input[name="type"]')[2].checked = true;
    completed.checked = true;
    */
    // submit
    // form.reset()
    // clear()
}





// Q2
// declare funciton => appel // call
// Call ==> on passe la declaration comme paramètre
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // attr & méthodes
    let content = "le cotenue est: ";
    let typeValue = "";
    let completedValue = "non";
    if (listRadioButton.checked) {
        typeValue = listRadioButton.value;
    }
    if (completed.checked) {
        completedValue = "oui";
    }
    let objetData = {
        title: form.title.value,
        email: form.email.value,
        description: form.description.value,
        password: form.password.value,
        priority: form.priority.value,
        type: typeValue,
        completed: completedValue,
    };
    afficherListe(objetData)
    if (confirm('tu veux reinitialiser le formulaire')) {
        form.reset()
    }











    // template literral
    content += `title: ${title.value},
    email: ${email.value}
    description: ${description.value},        
    password: ${password.value},        
    priority: ${priority.value},    
    Type: ${typeValue},  
    completed: ${completedValue},  
    `;

    console.log("=== Contenu Formulaire === ");
    console.log(content);
});
