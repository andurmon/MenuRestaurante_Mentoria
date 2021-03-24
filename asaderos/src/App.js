import React from "react"
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './styles/wellcome.css'
import Bienvenida from "./pages/Bienvenida"
import Menu from './pages/Menu';
import CarBuy from './pages/CarBuy'
import Context from "./context/Context"
import products from "./components/products"

function App() {
  const carrito = products;
  return (
    <Context.Provider value={carrito}>
      <BrowserRouter>
      
        <Switch>

          <Route exact path="/" component={Bienvenida}/>
          <Route exact path="/CarBuy" component={CarBuy}/>
          <Route exact path="/Menu" component={Menu}/>
          

        </Switch>
      
      </BrowserRouter>
    </Context.Provider>

  );
}

export default App;
