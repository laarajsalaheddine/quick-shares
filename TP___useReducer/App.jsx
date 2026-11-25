import { useReducer, useState, createContext, useContext, useEffect } from "react";

const ExpenseContext = createContext(null);
const API = "http://localhost:3001/depenses"

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_DATA":
      return payload;

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
const initialState = []
const defaultForm = { title: "", amount: 0 }

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
  const { dispatch, formulaire, setformulaire, ajouter } = useContext(ExpenseContext)

  function handelchange(abc) {
    const { value, type, name, checked } = abc.target
    setformulaire({ ...formulaire, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formulaire.id) {
      ajouter(formulaire)
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
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  async function ajouter(donnee) {
    setLoading(true);
    try {
      const response = await fetch(API, {
        method: "POST",
        body: JSON.stringify(donnee),
        headers: {
          "Content-type": "application/json"
        }
      });
      if (!response.ok) throw new Error("Erreur lors du chargement des données");
      const data = await response.json();
      dispatch({ type: "ADD_EXPENSE", payload: data })
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message)
    } finally {
      setLoading(false);
    }
  }
  useEffect(
    () => {
      async function loadData() {
        try {
          const response = await fetch(API);
          if (!response.ok) throw new Error("Erreur lors du chargement des données");
          const data = await response.json();
          dispatch({ type: "LOAD_DATA", payload: data })
        } catch (error) {
          setError(error.message)
        }
      }
      loadData()
    }, []);
  return (
    <div>
      <ExpenseContext.Provider value={{
        depense, dispatch, formulaire, setformulaire, ajouter
      }}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading && <p style={{ color: "blue" }}>Chargement en cours...</p>}
        <ResumeDepenses />
        <FormulaireDepense />
        <ListeDepenses />
      </ExpenseContext.Provider>
    </div>
  );
}
