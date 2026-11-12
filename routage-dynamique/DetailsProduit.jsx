import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
const API = 'http://localhost:3001/produits';

export default function DetailsProduit() {
    const { id } = useParams();
    const [produit, setProduit] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(API + '/' + id)
            const data = await response.json()
            setProduit(data)
        }

        fetchData();
    }, [id])
    return (
        !produit ? <p>Chargement...</p> :
        <div>
            <h1>Détails du produit</h1>
            <p>Nom: {produit.nom} </p>
            <p>Catégorie: {produit.categorie} </p>
            <p>Prix: {produit.prix} </p>
            <p>Stock: {produit.stock} </p>
            <p>Description: {produit.description} </p>
        </div>
    )
}