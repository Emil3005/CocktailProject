
import Header from './Components/Header/Header.js'
import './Style/App.css'
import Filter from './Pages/Filter/filter'


function App() {
  return (
    
    <div className="CocktailCloud">
      <div>
        <Header />
      </div> 
          <div className ="mainContent">
            <Filter />
          </div>
    </div>
    
  );
}

export default App;
