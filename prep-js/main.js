const students = [
    {
        id: 1,
        firstName: "Ali",
        lastName: "Benali",
        age: 20,
        city: "Casablanca"
    },
    {
        id: 2,
        firstName: "Sara",
        lastName: "El Amrani",
        age: 22,
        city: "Rabat"
    },
    {
        id: 3,
        firstName: "Youssef",
        lastName: "Karimi",
        age: 21,
        city: "Marrakech"
    }
];

const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const age = document.getElementById("age");
const ville = document.getElementById("ville");
const btnForm = document.querySelector("#formId button");

let voir = null;
let modifier = null;
let supprimer = null;
let duppliquer = null;
let selectedRow = null; // flag
// 1 - Affichage de la liste
function afficherListe(list = students) {
    const tbody = document.getElementById("tbody");
    let bodyContent = "";
    list.forEach((elt, i) => {
        bodyContent += `
        <tr>
            <td>${elt.id}</td>
            <td>${elt.firstName}</td>
            <td>${elt.lastName}</td>
            <td>${elt.age}</td>
            <td>${elt.city}</td>
            <td>
                <button class='supprimer'>Supprimer</button>
                <button class='voir'>voir</button>
                <button class='modifier'>Modifier</button>
                <button class='duppliquer'>Duppliquer</button>
            </td>
        </tr>
    `;
    })
    tbody.innerHTML = bodyContent;

    // les événements de chaque bouton dans la liste doit etre attaché just après l'affichage 
    voirButtons = document.querySelectorAll(".voir")
    modifierBtns = document.querySelectorAll(".modifier")
    supprimer = document.querySelectorAll(".supprimer")
    duppliquer = document.querySelectorAll(".duppliquer")

    btnForm.innerHTML = "Ajouter"
    document.querySelector("#formId").reset();

    // 2 - le boutton Voir qui affiche les details d'une ligne
    voirButtons.forEach((elt) => {
        elt.addEventListener("click", (e) => {
            let id = null;
            let detail = "";
            id = e.target.parentNode.parentNode.querySelectorAll("td")[0].textContent;
            // id = e.target.parentNode.parentNode.firstchild.textContent;
            console.log(id);
            let resultat = list.find((elt) => {
                return Number(id) === elt.id;
            });
            console.log(resultat);
            detail += `
                Id: <strong>${resultat.id} </strong>,
                Nom: <strong>${resultat.lastName} </strong>,
                Prenom: <strong> ${resultat.firstName}</strong>,
                Age: <strong> ${resultat.age}</strong>,
                Ville: <strong> ${resultat.city}</strong>,
            `;

            document.getElementById("ligne-info").innerHTML = detail;
        });
    })
    // 2 - le boutton SUPPRIMER qui supprime une ligne
    supprimer.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const id = e.target.parentNode.parentNode.querySelectorAll("td")[0].textContent;
            console.log(id);
            let listApresFilter = list.filter((elt) => {
                return Number(id) !== elt.id;
            });
            afficherListe(listApresFilter);
        });
    })
    // 3 - le boutton modifier qui modifie les valur d'une ligne
    // ici on recherche la ligne ciblé depuis la liste et on remplis les champs du formulaire
    // c'est la première phase de processus de modification
    modifierBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const id = e.target.parentNode.parentNode.querySelectorAll("td")[0].textContent;
            btnForm.innerHTML = "Modifier"
            selectedRow = list.find((elt) => {
                return Number(id) === elt.id;
            });
            prenom.value = selectedRow.firstName;
            nom.value = selectedRow.lastName;
            age.value = selectedRow.age;
            ville.value = selectedRow.city;
        });
    })
    // 4 - le boutton DUPPLIQUER qui crée une copie de la ligne ciblé
    duppliquer.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const id = e.target.parentNode.parentNode.querySelectorAll("td")[0].textContent;

            let rowToDupplicate = students.find((elt) => {
                return Number(id) === elt.id;
            });

            // une copie
            // l'opérateur spread
            let nn = {
                ...rowToDupplicate,
                id: students.length + 1
            };

            students.push(nn);
            afficherListe(students);
        });
    })

}

// 5 - Ajouter un nouveau student
function ajouterStudent() {
    const unStudent = {};
    // unStudent.id = Date.now(); // timestamp (12134243367485678 <=> le nombre de seconds depuis 1970)
    // unStudent.id = getLastId(students[students.length - 1]);
    unStudent.id = students.length + 1;
    unStudent.firstName = prenom.value;
    unStudent.lastName = nom.value;
    unStudent.age = age.value;
    unStudent.city = ville.value;
    console.log(unStudent);
    students.push(unStudent);
    afficherListe(students);
}


// Modification Phase 2 
// ici on recherche et modifie l'objet orinal dans la list
// c'est la deuxième phase de processus de modification
function modifierStudent(objectToEditId) {
    students.forEach((elt, index) => {
        if (Number(elt.id) === Number(objectToEditId)) {
            eltInList = students[index];
            eltInList.firstName = prenom.value;
            eltInList.lastName = nom.value;
            eltInList.age = age.value;
            eltInList.city = ville.value;
        }
    });
    afficherListe(students);
}


// Evenement de soumission de fomrulaire 
document.getElementById("formId").addEventListener("submit", (e) => {
    e.preventDefault();
    if (selectedRow === null) {
        console.log("ajouter")
        ajouterStudent();
    } else {
        console.log("Modifier")
        modifierStudent(selectedRow.id);
    }
});

// affichage initial
afficherListe(students);