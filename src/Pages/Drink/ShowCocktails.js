import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import "./ShowCocktails.css"

//Liste der Cocktails die zurückgegeben wird
function ShowCocktails({match}) {
    let new_array;
    let text;
    const [items, setItems] = useState([]);
    useEffect(() => {
        text = `${match.params.chosenAlcohol}`;
        new_array = text.split(',');
        if (text.endsWith(',')) {
            text = text.slice(0, -1);
           
        }
        if (text.startsWith(",")) {
            text = text.slice(1);
           

        }
        if(text == ""){
            alert("pls choose something");
        }
        fetchItems(text);
       

    }, []);
//fetchen der Drinks über die CocktailDB
    const fetchItems = (filter) => {
        
        fetch(
            `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${filter}`
        ).then(async (e) => {
            var data = await e.json();
            if (data.drinks !== "None Found") {
                
                setItems(data.drinks);
               
                
            } else {
                alert("no Drinks found, change Criteria");
            }


        }).catch((e) => {
            console.log("ERROR")


        }).finally(() => {
            console.log("3")

        })
        ;
    }


    return (
        //rendern der Ergebnisse als Liste. Bilder anklickbar und leitet zu DrinksID/:id weiter
        <div className="Content">
            <Link to='/Drink'>
                <button className="ButtonShowCocktails">back</button>
            </Link>
            {items.map(item => (
                <h2 key={item.idDrink}>
                    <ul className='vertical'>

                        <li>
                            <ul className='horizontal'>
                                <li>
                                    <Link to={`/DrinkID/${item.idDrink}`}>
                                        <img src={item.strDrinkThumb} alt="" className="CocktailPicture"/>
                                    </Link>
                                </li>
                                <li>
                                    <div className='Title'>
                                        {item.strDrink}
                                    </div>
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
