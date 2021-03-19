import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Components/Header/Header.js'
import './Style/App.css'
import Filter from './Pages/DrinkFilter/Filter'
import Home from "./Pages/Home/Home";
import DrinksDetail from './Pages/SingleDrinks/DrinksDetail';
import ShowCocktails from './Pages/DrinkFilter/ShowCocktails';
import Game from './Pages/Games/Game';
import ShowGames from './Pages/Games/ShowGames';
import ShowWeather from './Pages/Weather/ShowWeather';


function App() {
    return (
        <Router>
            <div className="CocktailCloud">
                <div>
                    <Header/>
                </div>
                <div className="mainContent">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/Filter" exact component={Filter}/>
                        <Route path="/Drink/:id" component={DrinksDetail}/>
                        <Route path="/Filter/:chosenAlcohol" component={ShowCocktails}/>
                        <Route path="/Filter/,:chosenAlcohol" component={ShowCocktails}/>
                        <Route path="/Filter/:chosenAlcohol," component={ShowCocktails}/>
                        <Route path="/Game" exact component={Game}/>
                        <Route path="/Game/:chosenValues" component={ShowGames}/>
                        <Route path="/City" component={ShowWeather}/>
                        
                    </Switch>
                </div>
            </div>
        </Router>
    );
}


export default App;
