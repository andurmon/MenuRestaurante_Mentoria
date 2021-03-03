import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './styles/wellcome.css'
import Bienvenida from "./pages/Bienvenida"
import Menu from './pages/Menu';
import CarBuy from './pages/CarBuy'

function App() {
  return (
    <BrowserRouter>
    
       <Switch>

        <Route exact path="/" component={Bienvenida}/>
        <Route exact path="/CarBuy" component={CarBuy}/>
        <Route exact path="/Menu" component={Menu}/>
        

      </Switch>
    
    </BrowserRouter>
    
  );
}

export default App;
