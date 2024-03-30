import reactLogo from './assets/react.svg'
import Cards from './components/Cards'

import { useState } from 'react'
function App() {
  
    // POUR LE NAME 
    const [dataName,setDataName] = useState('');
    // POUR LE TEL 
    const [dataTel,setDataTel] = useState('');
    // TABLEAU OU ON VA AJOUTER LES ELEMENTS 
    const [contacts,setContacts] = useState([]);
    // POUR ID
    const [dataId,setDataId] = useState(null);
    // POUR RECUPERER LA VALEUR DU CHAMPS NOM MODIFIER 
    const [contactNameEditing, setContactNameEditing] = useState('');
    // POUR RECUPERER LA VALEUR DU CHAMPS TEL MODIFIER 
    const [contactTelEditing, setContactTelEditing] = useState('');
   
    
    // POUR RECUPERER LA VALEUR DU NOM
    function handleNameValue(e){
      setDataName(e.target.value); 
    }

    // POUR RECUPERER LA VALEUR DU TEL
    function handleTelValue(e){
      setDataTel(e.target.value);
    }

    // POUR CREER UN IDENTIFIANT UNIQUE 
    let lastId = 0;
    // récupére le timestamp au moment de l'execution de la ligne de code 
    let lastTime = Date.now();

    // fonction pour créer un identifiant unique 
    function createUniqueId() {
      // recupère le timestamp au moment de l'execution de la fonction
      const now = Date.now();

      // S'il y  a 2 timestamp identique alors 
      if (now === lastTime) {
        // incremente de 1
        lastId += 1;
      } else {
        lastId = 0;
        lastTime = now;
      }
      // retourne le timetamp - la valeur lastid
      return `${now}-${lastId}`;
    } 

    // POUR AJOUTER LES ELEMENTS AU TABLEAUX
    function handleSubmit(e){
      e.preventDefault();
      if(dataName.trim() != '' && dataTel.length ==10){
        setContacts(
          [...contacts,
          {id:createUniqueId(), name:dataName,tel: dataTel}]
        ) 
        
      }
      
    }

    // FONCTION POUR SUPPRIMER LA CARD 
    function handleDeleteContact(id){
      const tableUpdate = contacts.filter(contact => contact.id !==id);
      // console.log("contact");
      setContacts(tableUpdate);
    } 

    // RECUPERE ID, LE NOM ET LE TELEPHONE 
    function handleDatasContact(id,name,tel){
      setDataId(id);
      setContactNameEditing(name);
      setContactTelEditing(tel);
    }

    // FONCTION POUR MODIFIER 
    function handleModifyContact(){
      const updateContact = contacts.map(
        contact => {
          if(contact.id === dataId){

              if(contactNameEditing.trim ()!="" && contactTelEditing.trim() !=""){
                return {...contact,name:contactNameEditing,tel:contactTelEditing}
              }
              else{
                alert("erreur . Vous devais saisir un nom et un numéro a 10 chiffre. ");
              }

          }
          return contact;
        }
      )
      setContacts(updateContact);
      setDataId(null);
    }

  return (
    <>
      <h1> Carnet d'adresse</h1>
      {/* <Cards /> */}
      
      <form onSubmit={handleSubmit}>
           
          {/* NOM */}
          <label htmlFor="name">Prénom</label>
          <input type="text" id='name' onChange={handleNameValue} required />

          {/* TEL */}
          <label htmlFor="tel"> Téléphone : 10 chiffres </label>
          <input type="number" id='tel' onChange={handleTelValue} required />

          {/* BTN */}
          <input type="submit" value="ajouter" id='btn'/>
      </form>
      
      {/* APPELLE DU COMPOSANT Cards AVEC LA PROPS contacts */}
      <Cards 
          contacts = {contacts}
          handleDeleteContact = {handleDeleteContact}
          handleDatasContact = {handleDatasContact}
          handleModifyContact = {handleModifyContact}
          dataId={dataId}
          contactNameEditing = {contactNameEditing}
          setContactNameEditing = {setContactNameEditing}
          contactTelEditing = {contactTelEditing}
          setContactTelEditing ={setContactTelEditing}
      />
      
    </>
  )
}

export default App
