import './App.css';
import NavBar from './components/CardComponent/NavBar';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ItemListContainer from './components/CardComponent/ItemListContainer';
import SliderShow from './components/CardComponent/SliderShow';

function App() {

  return (    
    <div className="App">

      <NavBar />
      
      <SliderShow />

      <ItemListContainer />
     
    </div>
  );
}

export default App;
