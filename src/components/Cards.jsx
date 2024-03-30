
export default function Cards({contacts, handleDeleteContact,handleDatasContact,handleModifyContact,dataId,contactNameEditing,setContactNameEditing,contactTelEditing,setContactTelEditing}) {

  return (
    <div className='card'>
      {/* BOUCLE POUR AFFICHER TOUS LES CONTACTS  */}
        {contacts.map(
            contact=>
            // DIV POUR UN AFFICHER UN CONTACT
            <div key={contact.id} className="contactCard">
               {/* condition  pour afficher affichage*/}
                {dataId == contact.id ? (

                   <>
                   {/* pour la modification */}
                      <input type="text" value={contactNameEditing} onChange={(e) => setContactNameEditing(e.target.value)} />
                      <input type="text" value={contactTelEditing} onChange={(e) => setContactTelEditing(e.target.value)} />
                      <input type="submit" value="Modifier" id="btn" onClick={() => handleModifyContact(contact.id)} />
                   </>

                ) : (
                  <>
                       {/* affiche les information et deux bouton modifier et suprimer */}
                      <p>{contact.name}</p>
                      <p>{contact.tel}</p>
                      <input type="submit" value="Modifier" className="btnCard" onClick={() => handleDatasContact(contact.id,contact.name,contact.tel)}/>
                      <input type="submit" value="Supprimer" className="btnCard" onClick={() => handleDeleteContact(contact.id)}/>
                  </>
                )}
                
            </div>

        )}       

    </div>
  )
}
