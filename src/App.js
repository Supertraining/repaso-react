
import './App.css';
import { PrimerComponente } from './components/PrimerComponente'
import { SegundoComponente } from './components/SegundoComponente'


function App() {
  return (
    <div>
      <header className="App-header">

         <PrimerComponente />

      </header>
      <main className='d-flex'>

      <SegundoComponente />
      <SegundoComponente />
      <SegundoComponente />
      <SegundoComponente />
      
      </main>
    </div>
  );
}

export default App;
