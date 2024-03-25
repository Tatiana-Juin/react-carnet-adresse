
export default function Cards({contacts}) {

  return (
    <div className='card'>
      
        <ul>
          {/* AFFICHAGE DES CONTACTS AVEC map  */}
          {contacts.map(
            contact => 
            <li key = {contact.id}>
                {contact.name}
                <br />
                {contact.tel}
            </li>
          )}
        </ul>

    </div>
  )
}
