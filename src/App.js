
import Header from './Components/Header/Header.js'
import './Style/App.css'
import Filter from './Pages/Filter/Filter'
import Home from "./Pages/Home";
import Rating from "./Pages/Rating";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import DrinksDetail from './Pages/DrinksDetail';
import Brands from './Pages/Brands/Brands.js';
import AllDrinksList from './Pages/AllDrinks/AllDrinksList';
import GetIngredients from './Pages/Filter/GetIngredients';
import ShowCocktails from './Pages/Filter/ShowCocktails';
import Game from './Pages/Games/Game';
import ShowGames from './Pages/Games/ShowGames';
import ChooseCity from'./Pages/Weather/ChooseCity';
import ShowWeather from './Pages/Weather/ShowWeather';


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
          <Route path="/Filter" exact component={Filter}/>
          <Route path="/" exact component={Home}/>
          <Route path ="/Rating/:id" component={DrinksDetail} />
          <Route path ="/Brands" component={Brands} />
          <Route path ="/AllDrinks" component={AllDrinksList} />
          <Route path ="/Ingredients" component={GetIngredients}/>
          <Route path ="/Filter/:chosenAlcohol" component={ShowCocktails} />
          <Route path ="/Filter/,:chosenAlcohol" component={ShowCocktails} />
          <Route path ="/Filter/:chosenAlcohol," component={ShowCocktails} />
          <Route path ="/Game" exact component={Game} />
          <Route path ="/Game/:chosenValues" component={ShowGames}/> 
          <Route path ="/City" exact component={ChooseCity} />
          <Route path ="/City/:chosenCity"  component={ShowWeather} />
      
        </Switch>
      </div>
    </div>
    </Router>
  );
}



export default App;
