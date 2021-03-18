import React, {useEffect, useState} from 'react';
import Dropdown from './Dropdown.js'

const ChosenIngredients = () => {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setIngreds] = useState([]);
    const [allIngredients, setAllIngredients] = useState([]);
    const fetchItems = async () => {
        const data = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list');
        const ingreds = await data.json();
        console.log(ingreds.drinks);
        setIngreds(ingreds.drinks);
        setAllIngredients(items.strIngredient1);


    }


    const [chosenIngredients, setChosenIngredients] = useState([]);
    return (
        <div>
            <Dropdown title="Wähle Zutaten aus" items={allIngredients}
                      onItemsChanged={(items) => setChosenIngredients(items)}/>
            <div>
                {items.map(item => (
                    <h2>
                        <ul>
                            {item.strIngredient1}
                        </ul>
                    </h2>
                ))}
            </div>
        </div>

    )
}
export default ChosenIngredients;
