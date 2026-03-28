console.log("main 2 file working .........");


const contentDiv = document.querySelector("#box");
const ajouterBtn = document.getElementById("btn-add");
const supprimerBtn = document.getElementById("btn-remove");
const basculerBtn = document.getElementById("btn-toggle");


ajouterBtn.addEventListener("click", ()=> {
    console.log("ajouter .......")
    contentDiv.classList.add("highlight")
});


supprimerBtn.addEventListener("click", ()=> {
    contentDiv.classList.remove("highlight")
});


basculerBtn.addEventListener("click", ()=> {
    contentDiv.classList.toggle("highlight")
});
