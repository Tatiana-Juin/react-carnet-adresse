
export default function Cards({contacts}) {

  return (
    <div className='card'>
      {/* BOUCLE POUR AFFICHER TOUS LES CONTACTS  */}
        {contacts.map(
            contact=>
            // DIV POUR UN AFFICHER UN CONTACT
            <div key={contact.id} className="contactCard">
                <p>{contact.name}</p>
                <p>{contact.tel}</p>
                <input type="submit" value="Modifier" />
                <input type="submit" value="Supprimer" />
            </div>

        )}       

    </div>
  )
}
