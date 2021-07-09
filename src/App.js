import React from 'react'
import './App.css';
import NavBar from './components/CardComponent/NavBar';
import Footer from './components/CardComponent/Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ItemListContainer from './components/CardComponent/ItemListContainer';
import ItemDetailContainer from './components/CardComponent/ItemDetailContainer';
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
          <Route path={"*"} to = {"/"}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
   
  );
}

export default App;
