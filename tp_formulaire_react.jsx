import { useState, useEffect } from 'react'
import './app.css'


function Recap({matricule, marque, dateCirculation, color}) {
  return (
    <>
      <p style={{color: color}}>Matricule: {matricule}</p>
      <p>Marque: {marque}</p>
      <p>Date de circulation: {dateCirculation}</p>
      <p>Color: {color}</p>
    </>
  )
}

function Form() {
  const [matricule, setMatricule] = useState("")
  const [marque, setMarque] = useState("")
  const [dateCirculation, setDateCirculation] = useState("")
  const [color, setColor] = useState("")
  const [afficherRecap, setAfficherRecap] = useState(false)


  function handleSubmit(e) {
    e.preventDefault()
    setAfficherRecap(true)
  }
  return (
    <>
      <form  onSubmit={(e)=> handleSubmit(e)}>
        <label htmlFor="">
          Matricule <br />
          <input type="text" name="matricule" id="matricule"
            value={matricule} onChange={(e) => setMatricule(e.target.value)}
          />
        </label>
        <p></p>
        <label htmlFor="">
          Marque <br />
          <select value={marque} onChange={(e) => setMarque(e.target.value)}>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Ford">Ford</option>
          </select>
        </label>
        <p></p>
        <label htmlFor="">
          Date de circulation <br />
          <input type="date" name="dateCirculation" id="dateCirculation"
            value={dateCirculation} onChange={(e) => setDateCirculation(e.target.value)}
          />
        </label>
        <p></p>
        <label htmlFor="">
          Color <br />
          <input type="color" name="color" id="color"
            value={color} onChange={(e) => setColor(e.target.value)}
          />
        </label>
      <p>
        <button>Confirmer</button>
      </p>
      </form>

      {afficherRecap && <Recap matricule={matricule} marque={marque} dateCirculation={dateCirculation} color={color} />}
    </>
  )
}

function App() {

  return (
    <>
      <Form />
    </>
  )
}

export default App
