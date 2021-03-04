
import Header from './Components/Header/Header.js'
import './Style/App.css'
import Filter from './Pages/Filter/Filter'
import Home from "./Pages/Home";
import Rating from "./Pages/Rating";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import DrinksDetail from './Pages/DrinksDetail';
import Brands from './Pages/Brands/Brands.js';


function App() {
  return (
    <Router>
    <div className="CocktailCloud">
      <div>
        <Header />
      </div> 
      <div className ="mainContent">
        <Switch>
          <Route path="/Rating" exact component={Rating}/>
          <Route path="/Filter" component={Filter}/>
          <Route path="/" exact component={Home}/>
          <Route path ="/Rating/:id" component={DrinksDetail} />
          <Route path ="/Brands" component={Brands} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}



export default App;
