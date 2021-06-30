import './App.css';
import NavBar from './components/CardComponent/NavBar';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ItemListContainer from './components/CardComponent/ItemListContainer';

function App() {

  return (    
    <div className="App">

       <NavBar />
      
       <ItemListContainer />
     
    </div>
  );
}

export default App;
