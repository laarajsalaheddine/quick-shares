class produit {
    constructor(id, nom, prix, qte) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.qte = qte;
    }
    afficherproduit() {
        return `Produit : ${this.nom} - Prix : ${this.prix} DH - Quantité : ${this.qte}, TOTAL: ${this.calculerTotal()}`;
    }
    calculerTotal() {
        return this.prix * this.qte
    }
}

const pr1 = new produit(1, "Clavier", 300, 5);
const pr2 = new produit(1, "Clavier _DLFJLKQSDF", 300, 5);
const pr3 = new produit(1, "Clavier MMMMMMMMMMM", 120, 3);
console.log(pr1.afficherproduit());
