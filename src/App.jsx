import reactLogo from './assets/react.svg'
import Cards from './components/Cards'

import { useState } from 'react'
function App() {
  
  /* 
    ETAPE 
    useState => dataName (string) onChange={e=> setDataName(e.target.value)}
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
    
    // POUR RECUPERER LA VALEUR DU NOM
    function handleNameValue(e){
      setDataName(e.target.value); 
    }

    // POUR RECUPERER LA VALEUR DU TEL
    function handleTelValue(e){
      setDataTel(e.target.value);
    }

    // POUR AJOUTER LES ELEMENTS AU TABLEAUX
    function handleSubmit(e){
      e.preventDefault();
      if(dataName.trim() != '' && dataTel.length ==10){
        setContacts(
          ...contacts,
          {id:contacts.length+1, name:dataName,tel: dataTel}
        ) 
      }
    }

  return (
    <>
      <h1> Carnet d'adresse</h1>
      {/* <Cards /> */}
      
      <form onSubmit={handleSubmit}>

          {/* Name    */}
          <label htmlFor="name">Prénom</label>
          <input type="text" id='name' onChange={handleNameValue} required />

          {/* TEL */}
          <label htmlFor="tel"> Téléphone</label>
          <input type="number" id='tel' onChange={handleTelValue} required />

          {/* BTN */}
          <input type="submit" value="ajouter" id='btn'/>
      </form>

      
      
    </>
  )
}

export default App
