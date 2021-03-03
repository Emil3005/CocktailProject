import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import "./Rating.css"
import "./DrinksDetails.css"
import "./Home.css"



function DrinksDetail({match}) {

    useEffect(() => {
        fetchItems();
        console.log(match);
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
        );
        const items = await data.json();
        setItems(items.drinks);
        console.log(items.drinks);
        
    }


    return (
      <div className="DrinksDetail">
          {items.map(item => (
                <h2 key={item.idDrink}>
                    <ul className = "list">
                        <li className ="Title"> Name = {item.strDrink} </li>
                        <li> <img src={item.strDrinkThumb} alt="" className="CocktailPicture"/>  </li>
                        <li> Ingredient1  = {item.strIngredient1}</li>
                        <li> Ingredient2  = {item.strIngredient2}</li>
                        <li> Ingredient3  = {item.strIngredient3}</li>
                        <li> Ingredient4  = {item.strIngredient4}</li>
                        <li> Ingredient5  = {item.strIngredient5}</li>
                        <li> Ingredient6  = {item.strIngredient6}</li>
                        <li className ="Instruction"> Zubereitung = {item.strInstructionsDE}</li>
                   </ul>
                   
                   
                </h2>
            ))}
      </div>
    );
  }

  export default DrinksDetail