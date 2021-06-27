import './App.css';
import NavBar from './components/CardComponent/NavBar';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ItemListContainer from './components/CardComponent/ItemListContainer';
import imagen from './img/arreglo1.jpg'

function App() {

  return (    
    <div className="App">

       <NavBar />
      
       <ItemListContainer imagen={imagen} titulo={"Arreglo1"} descripcion={"Texto Descripción"} precio={"Precio"}/>
     
    </div>
  );
}

export default App;
