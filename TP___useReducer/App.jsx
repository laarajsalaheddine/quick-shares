
import { useReducer, useState, createContext, useContext } from "react";

const ExpensesContext = createContext(null);
/* *************** funcitons *************** */
const depencesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, { ...action.payload, id: Number(state[state.length - 1].id) + 1 }];

    case "DELETE_EXPENSE":
      return state.filter((elt) => {
        return elt.id != action.payload.id
      });

    case "UPDATE_EXPENSE":
      return state.map((elt) => {
        return elt.id === action.payload.id ? {
          ...elt,
          titre: action.payload.titre,
          montant: action.payload.montant
        } : elt;
      });

    default: return state
  }
}
/* *************** Componenet *************** */
function ResumeDepenses() {
  const { listDepences } = useContext(ExpensesContext);
  return (
    <div>
      <h2>Mes dépenses</h2>
      <p>Nombre de dépenses : {
        listDepences.length
      }</p>
      <p>Montant total : {
        listDepences.reduce((acc, elt) => {
          return Number(acc) + Number(elt.montant);
        }, 0)
      } DH</p>
    </div>
  );
}

function FormulaireDepense() {
  const { formData, onHandleChange, depenceDistpatch } = useContext(ExpensesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id === null)
      depenceDistpatch({ type: "ADD_EXPENSE", payload: formData })
    else
      depenceDistpatch({ type: "UPDATE_EXPENSE", payload: formData })
  };
  return (
    <div>
      {JSON.stringify(formData)}
      <hr />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Titre"
          name="titre" value={formData.titre}
          onChange={(e) => onHandleChange(e)}
        />
        <input type="number" placeholder="Montant"
          name="montant" value={formData.montant}
          onChange={(e) => onHandleChange(e)}
        />
        <button type="submit">{formData.id !== null ? "Modifier" : "Ajouter"}</button>
      </form>
    </div>
  );
}

function ListeDepenses() {
  const { listDepences, depenceDistpatch, onEdit, setFormData } = useContext(ExpensesContext);
  const handleDele = (idParametre) => {
    depenceDistpatch({
      type: "DELETE_EXPENSE", payload: {
        id: idParametre
      }
    })
  }
  const handleEdit = (id) => {
    // la fonction "find" est immulatble donc elle renvoi
    setFormData(onEdit(id))
  }


  return (
    <ul>
      {listDepences.map((d) => (
        <li key={d.id}>
          {d.titre} -- {d.montant} DH
          <button onClick={() => handleEdit(d.id)}>Modifier</button>
          <button onClick={() => handleDele(d.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const initState = [
    { id: 1, titre: "Transport", montant: 50 },
    { id: 2, titre: "Nourriture", montant: 100 },
    { id: 3, titre: "Loisirs", montant: 120 }
  ];

  const [listDepences, depenceDistpatch] = useReducer(depencesReducer, initState);
  const [formData, setFormData] = useState({
    id: null,
    titre: "",
    montant: 0,
  });


  return (
    <div>
      <ExpensesContext.Provider value={
        {
          listDepences, formData,
          depenceDistpatch,
          onHandleChange: (e) => {
            const { name, value, checked, type } = e.target;
            setFormData({ ...formData, [name]: value })
          },
          setFormData,
          onEdit: (id) => {
            return listDepences.find((elt) => {
              return elt.id === id
            })
          }
        }
      }>
        <ResumeDepenses />
        <FormulaireDepense />
        <ListeDepenses />
      </ExpensesContext.Provider>

    </div>
  );
}