import { useReducer, useState, createContext, useContext } from "react";

const ExpenseContext = createContext(null);
const API = "http://localhost:3001/depenses"

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_EXPENSE":
      return [...state, { ...payload, id: Number(state[state.length - 1].id) + 1 }];

    case "DELETE_EXPENSE":
      return state.filter((s) => s.id !== payload.id)

    case "UPDATE_EXPENSE":
      return state.map((s) => s.id === payload.id ?
        { ...s, title: payload.title, amount: payload.amount } : s)
    default:
      return state;
  }
}
const initialState = [
  { id: 1, title: 'Transport', amount: 30 },
  { id: 2, title: 'Nourriture', amount: 100 },
  { id: 3, title: 'Loisirs', amount: 120 }
]
const defaultForm = { id: null, title: "", amount: 0 }
function ResumeDepenses() {
  const { depense } = useContext(ExpenseContext);


  return (
    <div>
      <h2>Mes dépenses</h2>
      <p>Nombre de dépenses : {depense.length}</p>
      <p>Montant total : {depense.reduce((acc, lt) => {
        return Number(acc) + Number(lt.amount);
      }, 0)} DH</p>
    </div>
  );
}

function FormulaireDepense() {
  const { dispatch, formulaire, setformulaire } = useContext(ExpenseContext)

  function handelchange(abc) {
    const { value, type, name, checked } = abc.target
    setformulaire({ ...formulaire, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formulaire.id) {
      dispatch(
        { type: "ADD_EXPENSE", payload: formulaire }
      )
    } else {
      dispatch(
        { type: "UPDATE_EXPENSE", payload: formulaire }
      )
      setformulaire(defaultForm)

    }

  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="Titre" name="title"
        value={formulaire.title} onChange={(e) => handelchange(e)}
      />
      <input type="number" placeholder="Montant" name="amount"
        value={formulaire.amount} onChange={(e) => handelchange(e)}
      />
      <button type="submit">{formulaire.id ? "Modifier" : "Ajouter"}</button>
    </form>
  );
}

function ListeDepenses() {
  const { depense, dispatch, setformulaire } = useContext(ExpenseContext);

  function handleDelete(id) {
    if (!confirm("Voulez-vous vraiment supprimer cette dépense ?"))
      return;
    dispatch({ type: "DELETE_EXPENSE", payload: { id } })
  }



  function handleEdit(id) {
    const objetSelected = depense.find((p) => p.id === id);
    setformulaire({ title: objetSelected.title, amount: objetSelected.amount, id: objetSelected.id });
  }

  return (
    <ul>
      {depense.map(p => (
        <li key={p.id}>
          {p.title} - {p.amount}
          <button onClick={() => handleEdit(p.id)}>Modifier</button>
          <button onClick={() => handleDelete(p.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const [depense, dispatch] = useReducer(reducer,
    initialState
  )
  const [formulaire, setformulaire] = useState(defaultForm)

  return (
    <div>
      <ExpenseContext.Provider value={{
        depense, dispatch, formulaire, setformulaire
      }}>
        <ResumeDepenses />
        <FormulaireDepense />
        <ListeDepenses />
      </ExpenseContext.Provider>
    </div>
  );
}
