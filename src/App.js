import React from 'react'
import './App.css';
import NavBar from './components/CardComponent/NavBar';
import Footer from './components/CardComponent/Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ItemListContainer from './components/CardComponent/ItemListContainer';
import CategoryContainer from './components/CardComponent/CategoryContainer';
import ItemDetailContainer from './components/CardComponent/ItemDetailContainer';
import SomosContainer from './components/CardComponent/SomosContainer';
import EnviosContainer from './components/CardComponent/EnviosContainer';
import ContactoContainer from './components/CardComponent/ContactoContainer';
import SliderShow from './components/CardComponent/SliderShow';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {

  return (    
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path={"/"}>
          <SliderShow />          
          <ItemListContainer />
          </Route>
          <Route path={"/item/:id"}>
          <ItemDetailContainer />
          </Route>
          <Route path={"/cat/:id"}>
          <CategoryContainer />
          </Route>
          <Route path={"/somos"}>
          <SomosContainer />
          </Route>
          <Route path={"/envios"}>
          <EnviosContainer />
          </Route>
          <Route path={"/contacto"}>
          <ContactoContainer />
          </Route>
          <Route path={"*"} to = {"/"}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
   
  );
}

export default App;
