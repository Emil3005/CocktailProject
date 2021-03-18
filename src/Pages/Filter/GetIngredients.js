import React, {useEffect, useState} from 'react';


function GetIngredients() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);


    const fetchItems = async () => {
        const data = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list'
        );
        const items = await data.json();
        console.log(items.drinks);
        setItems(items.drinks)
    }
    return (
        <div className="DrinkList">
            <div>
                <h1>Rating</h1>
            </div>
            {items.map(item => (
                <h2 key={item.idDrink}>
                    {item.strIngredient1}
                </h2>
            ))}
        </div>
    );
}

export default GetIngredients
