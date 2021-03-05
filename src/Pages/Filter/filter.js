import React, {useState, useEffect} from 'react';
import './Filter.css';
import Dropdown from './Dropdown.js'

const Alkohol= [
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
        label: 'Whiskey',
    },
];
const Zutaten= [
    {
        value: 1,
        label :'Zitrone',
    },
    {
        value:2,
        label:'Orange',
    },
    {
        value:3,
        label: 'Basilikumblätter',
    },
];
const Softdrinks= [
    {
        value: 1,
        label :'Tonic Water',
    },
    {
        value:2,
        label:'Orangensaft',
    },
    {
        value:3,
        label: 'Ananassaft',
    },
    {
        value:4,
        label: 'Bananensaft',
    },
    {
        value:5,
        label: 'Multivitaminsaft',
    },
    {
        value:6,
        label: 'Apfelsaft',
    },
    {
        value:7,
        label: 'Grenadinensirup',
    },
    {
        value:8,
        label: 'Maracujasirup',
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
    const [chosenIngredients, setChosenIngredients] = useState([]);
    const [chosenAlcohol, setChosenAlcohol] = useState([]);
    const [chosenNonAlcohol, setChosenNonAlcohol] = useState([]);
    return(
        <div className= "FilterFunctions">
            <Dropdown title="Wähle Zutaten aus"    items={Zutaten}    onItemsChanged={(items) => setChosenIngredients(items)}/>
            gewählte Zutaten: {chosenIngredients}
            <Dropdown title="Wähle Alkohol aus"    items={Alkohol}    onItemsChanged={(items) => setChosenAlcohol(items) }/>
            gewählter Alkohol: {chosenAlcohol}
            <Dropdown title="Wähle Softdrinks aus" items={Softdrinks} onItemsChanged={(items) => setChosenNonAlcohol(items)}/>
            gewählte Softrinks: {chosenNonAlcohol}
            
        </div>
    );
}

export default Filter;