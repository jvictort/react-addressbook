import './TableComponent.css';
import { IoMdTrash } from 'react-icons/io';

function TableComponent({ apiUrl, contacts, setContacts }) {

  const handleDelete = async (contactId) => {
    await fetch(apiUrl + '/contacts/' + contactId, {
      method: 'DELETE',
      mode: 'cors'
    })

    setContacts((prevState) => prevState.filter((contact) => contact.id !== contactId));
  }

  if(!contacts.length) {
    return (
      <div className="contacts-container">
          <h2>Não há contatos cadastrados</h2>
      </div>
    );
  }

  return (
    <div className="contacts-container">

      <h2>Lista de contatos</h2>

      <div className="table-container">
        <table className="contact-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col">Telefone</th>
              <th scope="col">Endereço</th>
              <th scope="col">Excluir</th>
            </tr>
          </thead>
          <tbody id="finance-table-body">
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <th scope="row">{contact.id}</th>
                <td>{contact.contactName}</td>
                <td>{contact.contactEmail}</td>
                <td>{contact.contactTel}</td>
                <td>{contact.contactAddress}</td>
                <td><button type="button" onClick={() => handleDelete(contact.id)} className="delete-button"><IoMdTrash size={25} className="delete-icon" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableComponent;
