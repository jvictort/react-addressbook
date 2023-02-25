import FormComponent from './components/FormComponent.js';
import TableComponent from './components/TableComponent.js';
import { useState, useEffect } from 'react';
import './App.css';

const apiUrl = 'http://localhost:5000';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const request = async () => {

      const response = await fetch(apiUrl + '/contacts', {
        method: 'GET',
        mode: 'cors'
      })
      .then((response) => response.json())
      .then((response) => response)
      .catch((error) => console.log(`Erro: ${error}`));

      setContacts(response);
    }

    request();
  }, []);

  return (
    <div className="App">
      <div className="header-container">
        <div className="text-container">
          <h1>React Address Book</h1>
          <h2>Gerencie seus contatos e mantenha as pessoas queridas mais próximas de você</h2>
          <p>Crie laços e fortaleça suas conexões com o poder do <span>React</span></p>
        </div>

        <FormComponent apiUrl={apiUrl} setContacts={setContacts}/>

      </div>

      <TableComponent apiUrl={apiUrl} contacts={contacts} setContacts={setContacts}/>
    </div>
  );
}

export default App;
