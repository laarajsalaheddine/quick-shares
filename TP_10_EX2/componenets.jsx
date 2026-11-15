
function ResumeDepenses() {
  // TODO : Recevoir les dépenses en prop, puis calculer et afficher leur nombre et leur somme.
  return (
    <div>
      <h2>Mes dépenses</h2>
      <p>Nombre de dépenses : 3</p>
      <p>Montant total : 270 DH</p>
    </div>
  );
}

function FormulaireDepense() {
  // TODO : Recevoir onAdd ; conserver le titre et le montant dans des champs contrôlés et les transmettre à onAdd lors de la soumission.
  return (
    <form>
      <input type="text" placeholder="Titre" />
      <input type="number" placeholder="Montant" />
      <button type="button">Ajouter</button>
    </form>
  );
}

function ListeDepenses() {
  // TODO : Recevoir expenses, onEdit et onDelete ; parcourir chaque dépense et transmettre son id aux actions.
  return (
    <ul>
      <li>
        Transport - 50 DH
        <button>Modifier</button>
        <button>Supprimer</button>
      </li>
    </ul>
  );
}

export default function App() {
  // TODO : Utiliser useReducer pour gérer les dépenses et useContext pour partager l'état et les actions.
  return (
    <div>
      <ResumeDepenses />
      <FormulaireDepense />
      <ListeDepenses />
    </div>
  );
}
