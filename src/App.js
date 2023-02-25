import FormComponent from './components/FormComponent.js';
import { useState, useEffect } from 'react';
import './App.css';

const apiUrl = 'http://localhost:5000';

function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <div className="App">
      <div className="header-container">
        <div className="text-container">
          <h1>React Address Book</h1>
          <h2>Gerencie seus contatos e mantenha as pessoas queridas mais próximas de você</h2>
          <p>Crie laços e fortaleça suas conexões com o poder do <span>React</span></p>
        </div>

        <FormComponent apiUrl={apiUrl}/>

      </div>
    </div>
  );
}

export default App;
