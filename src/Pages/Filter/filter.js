import React, {useState, useEffect} from 'react';
import './Filter.css';
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown.js'

const Alcohol= [
    {
        value: 1,
        label :'Gin',
    },
    {
        value:2,
        label:'Vodka',
    },
    {
        value:3,
        label: 'Absolut Vodka',
    },
    {
        value:4,
        label: 'Dark Rum',
    },
    {
        value:5,
        label: 'Light Rum',
    },
    {
        value:6,
        label: 'Tequila',
    },
    {
        value:7,
        label: 'Rum',
    },
    {
        value:8,
        label: 'Whiskey',
    },
];
const Softdrinks= [
    {
        value: 1,
        label :'Tonic Water',
    },
    {
        value:2,
        label:'Orange juice',
    },
    {
        value:3,
        label: 'Pineapple juice',
    },
    {
        value:4,
        label: 'Banana juice',
    },
    {
        value:5,
        label: 'Multivitamin juice',
    },
    {
        value:6,
        label: 'Apple juice',
    },
    {
        value:7,
        label: 'Grenadine syrup',
    },
    {
        value:8,
        label: 'Passion fruit syrup',
    },
];

    
 
  
const Filter = () =>{

    useEffect(() => {
        fetchItems();
    },[]);
    
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
    return(
        <div className= "FilterFunctions">
            
            <Dropdown title="Wähle Alkohol aus"    items={Alcohol}    onItemsChanged={(items) => setChosenAlcohol(items) }/>
            chosenAlcohol: {chosenAlcohol}
            <Dropdown title="Wähle Softdrinks aus" items={Softdrinks} onItemsChanged={(items) => setChosenNonAlcohol(items)}/>
            chosenNonAlcohol: {chosenNonAlcohol}    
        <div>
                <br></br>
                
                <Link to = {`/Filter/${chosenAlcohol},${chosenNonAlcohol}`}>
                    <button>Search</button>
                </Link>
            </div>
            
        </div>
    );
}

export default Filter;