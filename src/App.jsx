import reactLogo from './assets/react.svg'
import Cards from './components/Cards'
function App() {
  

  return (
    <>
      <h1> Carnet d'adresse</h1>
      {/* <Cards /> */}
      
      <form>
          {/* Name */}
          <label htmlFor="name">Prénom</label>
          <input type="text" id='name' required />
          {/* TEL */}
          <label htmlFor="tel"> Téléphone</label>
          <input type="number" id='tel' required />
          {/* BTN */}
          <input type="submit" value="ajouter" id='btn' />
      </form>
      <Cards />
    </>
  )
}

export default App
