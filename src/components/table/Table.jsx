import {FaEdit, FaTrashAlt} from 'react-icons/fa';

const Table = ({ contacts, bringContact, getContacts, deleteContact, setEditId, setEdit }) => {

  const handleEdit = (id, name, phone, gender)=>{
    setEdit(true);
    bringContact(id, name, phone, gender);
    setEditId(id);
 
  }

  return (
    <section className='contacts-table'>
      <h4 className='text-center'>CONTACTS</h4>
      <table>
        <thead>
          <tr>
            <th className='table-info'>Username</th>
            <th className='table-info'>Phone Number</th>
            <th className='table-info'>Gender</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length !== 0 && contacts?.map((contact) => {
            const { id, name, phone, gender } = contact;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{gender}</td>
                <td><FaEdit color='green' type='button' onClick={()=>handleEdit(id, name, phone, gender)}/></td>
                <td><FaTrashAlt color='red' type='button' onClick={()=>deleteContact(id)}/></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {contacts.length === 0 && <div className='text-center'>There is no record to show</div>}
    </section>
  );
};

export default Table;
