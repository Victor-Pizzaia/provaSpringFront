import React from 'react';
import "./App.css";
import { Form } from './components/Form';
import { Listagem } from './components/Listagem';
import { Button } from './components/Button';

function App() {
  const [tabelaOuForm, setTabelaOuForm] = React.useState('tabela');

  const handleChangeScreen = () => {
    setTabelaOuForm(tabelaOuForm === 'tabela' ? 'form' : 'tabela');
  }
  console.log(tabelaOuForm)
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex glassEffect p-6 flex-col">
        {tabelaOuForm === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Button
                className="mb-4 bg-gradient-to-r from-blue-500 to-blue-800"
                onClick={handleChangeScreen}
              >
                Nova Moto
              </Button>
            </div>
            <Listagem />
          </>
        ) : (
          <Form handleChangeScreen={handleChangeScreen}/>
        )}
      </div>
    </div>
  )
}

export default App;
