
import Header from './Components/Header/Header.js'
import './Style/App.css'
import Filter from './Pages/Filter/Filter'
import Home from "./Pages/Home";
import Rating from "./Pages/Rating";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="CocktailCloud">
      <div>
        <Header />
      </div> 
      <div className ="mainContent">
        <Switch>
          <Route path="/Rating" component={Rating}/>
          <Route path="/Filter" component={Filter}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </div>
    </div>
    </Router>
  );
}



export default App;
