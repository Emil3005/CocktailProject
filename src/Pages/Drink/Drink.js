import React, {useEffect, useState} from 'react';
import './Drink.css';
import {Link} from 'react-router-dom'
import Dropdown from '../../Components/DropDown/Dropdown.js'

const Alcohol = [
    {
        value: 1,
        label: 'Gin',
    },
    {
        value: 2,
        label: 'Vodka',
    },
    {
        value: 3,
        label: 'Absolut Vodka',
    },
    {
        value: 4,
        label: 'Dark Rum',
    },
    {
        value: 5,
        label: 'Light Rum',
    },
    {
        value: 6,
        label: 'Tequila',
    },
    {
        value: 7,
        label: 'Rum',
    },
    {
        value: 8,
        label: 'Whiskey',
    },
];
const Softdrinks = [
    {
        value: 1,
        label: 'Tonic Water',
    },
    {
        value: 2,
        label: 'Orange juice',
    },
    {
        value: 3,
        label: 'Pineapple juice',
    },
    {
        value: 4,
        label: 'Banana juice',
    },
    {
        value: 5,
        label: 'Multivitamin juice',
    },
    {
        value: 6,
        label: 'Apple juice',
    },
    {
        value: 7,
        label: 'Grenadine syrup',
    },
    {
        value: 8,
        label: 'Passion fruit syrup',
    },
];


const Drink = () => {

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

    const [chosenAlcohol, setChosenAlcohol] = useState([]);
    const [chosenNonAlcohol, setChosenNonAlcohol] = useState([]);
    return (
        <div className="FilterFunctions">
            <div className="GameTitle">Filter</div>
            <ul className="FilterList">
                <li className="Dropdown"><Dropdown className="Dropdown" title="Choose Alcohol" items={Alcohol}
                                                   onItemsChanged={(items) => setChosenAlcohol(items)}/></li>
                <li className="Dropdown"><Dropdown className="Dropdown" title="Choose non Alcoholic" items={Softdrinks}
                                                   onItemsChanged={(items) => setChosenNonAlcohol(items)}/></li>
                <Link to={`/Filter/${chosenAlcohol},${chosenNonAlcohol}`}>
                    <button className="FilterButton">Search</button>
                </Link>
            </ul>
        </div>
    );
}

export default Drink;
