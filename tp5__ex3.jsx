import { useState } from 'react';
import './App.css'

function App() {

  const [produit, setProduit] = useState({
    nom: "",
    prix: 0,
    category: "",
  });
  const handleChange = (e) => {
    let { value, name } = e.target
    if (name === "prix") {
      value = parseFloat(value) || 0;
    }
    setProduit({ ...produit, [name]: value });
  }

  return (
    <>
      <input type="text" name='nom'
        placeholder="Nom ...."
        onChange={(e) => { handleChange(e) }}
        value={Number(produit.nom)} />
      <input type="text" name='prix' placeholder="Prix ...." onChange={(e) => { handleChange(e) }} value={produit.prix} />
      <input type="text" name='category' placeholder="Catgeorie ...." onChange={(e) => { handleChange(e) }} value={produit.category} />
      <div>
        <p>Nom: {produit.nom}</p>
        <p>Prix:  {produit.prix}</p>
        <p>Catégorie:  {produit.category}</p>
      </div>
    </>
  )
}

export default App
