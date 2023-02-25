import './FormComponent.css';
import { useState } from 'react';

function FormComponent({ apiUrl, setContacts }) {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactTel, setContactTel] = useState('');
  const [contactAddress, setContactAddress] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const contact = {
      id: Math.floor(Math.random() * 100),
      contactName,
      contactEmail,
      contactTel,
      contactAddress
    }

    await fetch(apiUrl + '/contacts', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(contact),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    setContacts((prevState) => [...prevState, contact]);

    setContactName('');
    setContactEmail('');
    setContactTel('');
    setContactAddress('');
  }

  return (
    <form method="POST" onSubmit={handleSubmit} className="form-container">
      <fieldset className="form-fieldset">
        <legend>Cadastre um novo contato</legend>

        <div className="form-control">
          <input type="text" name="contactName"
           className="form-input"
           required
           value={contactName || ''}
           onChange={(event) => setContactName(event.target.value)}/>

          <label htmlFor="contactName" className="form-label">Nome</label>
        </div>

        <div className="form-control">
          <input type="email" name="contactEmail"
           className="form-input"
           placeholder="email@dominio.com.br"
           required
           value={contactEmail || ''}
           onChange={(event) => setContactEmail(event.target.value)}/>

          <label htmlFor="contactEmail" className="form-label validated-label">Email</label>
        </div>

        <div className="form-control">
          <input type="tel" name="contactTel"
           pattern="(\([0-9]{2}\))\s([0-9]{5})-([0-9]{4})"
           className="form-input"
           placeholder="(99) 99999-9999"
           required
           value={contactTel || ''}
           onChange={(event) => setContactTel(event.target.value)}/>

          <label htmlFor="contactTel" className="form-label validated-label">Telefone</label>
        </div>

        <div className="form-control">
          <input type="text" name="contactAddress"
           className="form-input"
           required
           value={contactAddress || ''}
           onChange={(event) => setContactAddress(event.target.value)}/>

          <label htmlFor="contactAddress" className="form-label">Endereço</label>
        </div>

        <button type="submit" name="button" className="form-button">Criar</button>
      </fieldset>
    </form>
  );
}

export default FormComponent;
