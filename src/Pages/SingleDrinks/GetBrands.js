import React, {useEffect, useState} from 'react';

function GetBrands() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);


    const fetchItems = async () => {
        const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
        );
        const items = await data.json();
        setItems(items.drinks)
    }
    return (
        <div className="DrinkList">
            <div>
            </div>
            {items.map(item => (
                <h2 key={item.idDrink}>
                    {item.strIngredient1}
                </h2>
            ))}

        </div>
    );
}

export default GetBrands
