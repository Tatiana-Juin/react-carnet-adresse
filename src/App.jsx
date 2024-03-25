import reactLogo from './assets/react.svg'
import Cards from './components/Cards'

import { useState } from 'react'
function App() {
  
  /* 
    ETAPE 
    useState => dataName (string)
    useState => dataTel (string)
    useState => tableau vide 
    
    fonction pour récupérer dataName 
    fonction pour récupérer dataTel
    fonction pour ajouter au tableau

  */
    // POUR LE NAME 
    const [dataName,setDataName] = useState('');
    // POUR LE TEL 
    const [dataTel,setDataTel] = useState('');
    // TABLEAU OU ON VA AJOUTER LES ELEMENTS 
    const [contacts,setContacts] = useState([]);

    
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
      
    </>
  )
}

export default App
