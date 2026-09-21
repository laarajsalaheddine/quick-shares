const produits = [
    { id: 1, nom: "Clavier", prix: 300, categorie: "Informatique", stock: 5 },
    { id: 2, nom: "Souris", prix: 150, categorie: "Informatique", stock: 0 },
    { id: 3, nom: "Ecran", prix: 1800, categorie: "Informatique", stock: 3 },
    { id: 4, nom: "Bureau", prix: 1200, categorie: "Mobilier", stock: 2 },
    { id: 5, nom: "Chaise", prix: 900, categorie: "Mobilier", stock: 0 }
];
const nom = produits.map(produit => produit.nom);
// console.log(nom);
const dispo = produits.filter(p => p.stock > 0);
// console.log(dispo);
function rechercherProduit(id) {
    return produits.find(p => p.id === id);
}
// console.log(rechercherProduit(3));
function ajouterproduit(produits, nouveauproduit) { return [...produits, nouveauproduit] };
const nouveauProduit = {
    id: 6,
    nom: "Webcam",
    prix: 500,
    categorie: "Informatique",
    stock: 4
};
// console.log(ajouterproduit(produits, nouveauProduit))


function modifierProduit(produits, id, nouveauPrix) {
    return produits.map(p => (p.id === id) ? { ...p, prix: nouveauPrix } : p);
} //  fin fonciton modifierProduit 


const listModifiee = modifierProduit(produits, 1, 150);

// console.log(listModifiee);

function SupprimerPrix(produits, id) {
    return produits.filter((e) => e.id !== id);
}
// console.log(SupprimerPrix(produits, 2));




const afficherDetailsProduit = ({ nom, categorie, prix, stock }) => {
    return `${nom} - Categorie: ${categorie} - Prix: ${prix} DH - Stock: ${stock}`;
}

produits.forEach(element => {
    console.log(afficherDetailsProduit(element))
});



