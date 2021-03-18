import React, {useState, useEffect} from 'react';

function GetDrinksImages({letter}){




    useEffect(() => {
        fetchItems();
        console.log(letter);
    },[]);

    const [items, setItems] = useState([]);
    images :{};

    const fetchItems = async () => {
    const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
    );
    const items = await data.json();
    console.log(items.drinks);
    setItems(items.drinks)
    }
    return(
        <div>
            {items.map(item => (
                <h2 key={item.idDrink}>
                    <ul className = "list">
                        {item.strDrinkThumb}
                   </ul>
                   
                   
                </h2>
            ))}
        </div>
    )
}

export default GetDrinksImages;