import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import "./ShowCocktails.css"

function ShowCocktails({match}){

    useEffect (() => {
        fetchItems();
        console.log(match);
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${match.params.chosenAlcohol}`
        );
        const items = await data.json();
        setItems(items.drinks);
        console.log(items.drinks);
    }
    return(
        <div className="Content">
            {items.map(item =>(
                <h2 key={item.idDrink}>
                    <ul className='vertical'>
                        <li>
                        <ul className ='horizontal'>
                        <li className='Title'> {item.strDrink} 
                            <Link to = {`/Rating/${item.idDrink}`}>
                                <img src={item.strDrinkThumb} alt="" className="CocktailPicture"/> 
                            </Link>
                        </li>
                        
                        </ul>
                        </li>
                    </ul>
                </h2>
            ))}
        </div>
    )
}

export default ShowCocktails;