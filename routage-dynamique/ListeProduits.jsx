import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const API = 'http://localhost:3001/produits';

export default function ListeProduits() {
    const [listProduits, setListProduits] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(API)
            const data = await response.json()
            setListProduits(data)
        }

        fetchData();
    }, [])
    return (
        <>
            <div>
                <h1>Liste des produits</h1>
                {
                    listProduits.map((elt) => (
                        <div key={elt.id + Math.random()} >
                            <p>{elt.nom}</p>
                            <p>{elt.categorie}</p>
                            <Link to={"/produits/" + elt.id}>
                                <button>Afficher détails</button>
                            </Link>
                            <hr />
                        </div>
                    ))
                }
            </div>
        </>
    )
}