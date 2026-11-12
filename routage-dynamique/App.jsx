import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ListeProduits from './composants/ListeProduits'
import DetailsProduit from './composants/DetailsProduit'
function Home() {
  return <h1>Home</h1>
}
export default function App() {



  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          &nbsp;|&nbsp;
          <Link to="/produits">Produits</Link>
        </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits"
            element={<ListeProduits />} />

            <Route path="/produits/:id"
            element={<DetailsProduit />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}
