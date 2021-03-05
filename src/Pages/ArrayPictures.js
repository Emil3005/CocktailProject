import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import "./Home.css"


function ArrayPictures() {

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php'
        );
        const items = await data.json();
        console.log(items.drinks);
        setItems(items.drinks)
    }
    return (
      <div className="Pictures">
            {items.map(item => (
                <Link to = {`/Rating/${item.idDrink}`}>
                <img src={item.strDrinkThumb} alt="" className="Picture"/> 
                </Link>
            ))}
      </div>
    );
  }

  export default  ArrayPictures