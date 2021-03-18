import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import "./Rating.css"


function Rating() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
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

                    <Link to={`/Rating/${item.idDrink}`}>{item.strDrink}</Link>
                </h2>
            ))}

        </div>
    );
}

export default Rating
