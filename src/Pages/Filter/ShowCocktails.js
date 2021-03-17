import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import "./ShowCocktails.css"

function ShowCocktails({match}){
    let new_array;
    let text;
    const [items, setItems] = useState([]);
    useEffect (() => {                        
        console.log(match);
        
        text = `${match.params.chosenAlcohol}`;

        new_array = text.split(',');
        
        console.log("hallo");
        console.log(new_array);
        console.log(text.endsWith(','));
        if(text.endsWith(',')){
            text = text.slice(0,-1);
            console.log(text);
        }
        if(text.startsWith(",")){
            text = text.slice(1);
            console.log(text)

        }
        fetchItems(text);
        setItems([]);
        new_array.forEach(filter=>fetchItems(filter))

    },[]);
    
    const fetchItems =  (filter) =>  {
        console.log("1");
        fetch(
            `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${filter}`
        ).then (async(e)  =>   {
            
            var data = await e.json();
            console.log("data")
            console.log(data);
            if(data.drinks !== "None Found"){
                console.log("then")
                setItems([...items,...data.drinks]);
                console.log(data.drinks);
            }
            else{

            }
            
            
        }).catch((e)=>{
            console.log("ERROR")
            
            
            
        }).finally(()=>{
            console.log("3")
            
        })
        ;
    }
    
    
    return(

        <div className="Content">
            {items.map(item =>(
                <h2 key={item.idDrink}>
                    <ul className='vertical'>
                        <li>
                        <ul className ='horizontal'>
                        <li > 
                            <Link to = {`/Rating/${item.idDrink}`}>
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