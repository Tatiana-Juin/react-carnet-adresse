
export default function Cards({contacts}) {

  return (
    <div className='card'>
      
        {contacts.map(
            contact=>
            
            <div key={contact.id} className="contactCard">
                <p>{contact.name}</p>
                <p>{contact.tel}</p>
            </div>

        )}       

    </div>
  )
}
