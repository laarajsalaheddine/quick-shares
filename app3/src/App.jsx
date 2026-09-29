import jdfh from './assets/asset-image.png'
import './App.css'

function App() {

  // const pr1 = {
  //   name: "Super souris ",
  //   price: 100,
  //   quantity: 3,
  //   total: 300
  // }
  // const sldfj = {
  //   fontSize: "32px",
  //   textAlign: "center",
  //   color: "red"
  // }
  // const styleParagraphe = {
  //   textDecoration: "underline",
  //   textTransform: "uppercase"
  // }

  const welcome = {
    border: "1px solid black",
    padding: "10px",
    backgroundColor: "lightblue",
    textAlign: "center",
    fontSize: "24px"
  }

  const login = {
    border: "1px solid black",
    padding: "10px",
    backgroundColor: "khaki",
    textAlign: "center",
    fontSize: "24px"
  }

  const isConnected = false;


  return (
    <>
      {/* Ex1 */}
      {/* <h1>Bienvenue dans React</h1>
      <h3>Nous apprenons aujourd’hui la syntaxe JSX.</h3>
      <img src={jdfh} alt="image" widt="100" height="auto" />
      <br />
      <input type="text" placeholder="Entrez votre texte ici" />
      <button>Envoyer</button> */}

      {/* Ex2 */}
      {/* <p>{pr1.name}</p>
      <p>{pr1.price}</p>
      <p>{pr1.quantity}</p>
      <p>{pr1.total}</p> */}

      {/* Ex 5*/}
      {/* <h1 style={
        sldfj
      }>Bienvenue dans notre boutique</h1>
      <p style={styleParagraphe}> lorem ipsum dolor sit amet, lorem ipsum dolor sit amet</p> */}

      {isConnected ? <p style={welcome}>Bienvenue utilisateur</p> : <p style={login}>Veuillez vous connecter</p>}




    </>
  )
}

export default App
