import './App.css';
import { NavBar } from './components/CardComponent';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {

  return (    
    <div className="App">

       <NavBar />

      <header className="App-header">       
        <p>
          Dulce Fusión en React
        </p>        
        <p>
          En Construcción....
        </p>
      </header>
      
    </div>
  );
}

export default App;
