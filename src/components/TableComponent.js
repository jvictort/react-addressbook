import './TableComponent.css';
import { IoMdTrash } from 'react-icons/io';

function TableComponent({ contacts }) {

  const handleDelete = async (contactId) => {
    console.log(contactId);
  }
  // console.log(props.contacts);
  return (
    <div className="table-section">
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
                <th scope="col">{contact.id}</th>
                <td scope="col">{contact.contactName}</td>
                <td scope="col">{contact.contactEmail}</td>
                <td scope="col">{contact.contactTel}</td>
                <td scope="col">{contact.contactAddress}</td>
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
