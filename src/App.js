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
import Cart from './components/CardComponent/Cart';
import SliderShow from './components/CardComponent/SliderShow';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ShopProvider } from './context/ShopContext'
import { PedidoContainer } from './components/CardComponent/PedidoContainer';

function App() {

  return (    
    <div className="App">
      <ShopProvider>
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path={"/"}>
          <SliderShow />          
          <ItemListContainer />
          </Route>
          <Route exact path={"/item/:id"}>
          <ItemDetailContainer />
          </Route>
          <Route exact path={"/cat/:cat"}>
          <CategoryContainer />
          </Route>
          <Route exact path={"/somos"}>
          <SomosContainer />
          </Route>
          <Route exact path={"/envios"}>
          <EnviosContainer />
          </Route>
          <Route exact path={"/contacto"}>
          <ContactoContainer />
          </Route>
          <Route exact path={"/cart"}>
          <Cart />
          </Route>
          <Route exact path={"/pedido"}>
          <PedidoContainer />
          </Route>
          <Route exact path={"*"} to = {"/"}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ShopProvider>
    </div>
   
  );
}

export default App;
