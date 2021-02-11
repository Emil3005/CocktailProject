import logo from './Assets/CocktailCloudTransparent.png'
import Header from './Components/Header/Header.js'
import './Style/App.css'


function App() {
  return (
    <div className="CocktailCloud">
      <div>
        <Header />
      </div>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
