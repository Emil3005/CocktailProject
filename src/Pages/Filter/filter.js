import React from 'react';
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
  var chosenAlcohol= [];
  var chosenNonAlcohol= [];
  var chosenIngredients= [];
  
const Filter = () =>{
    return(
        <div className= "FilterFunctions">
            <Dropdown title="Wähle Zutaten aus"    items={Zutaten}    onItemsChanged={(items) => chosenIngredients = items}/>
            <Dropdown title="Wähle Alkohol aus"    items={Alkohol}    onItemsChanged={(items) => chosenAlcohol = items}/>
            <Dropdown title="Wähle Softdrinks aus" items={Softdrinks} onItemsChanged={(items) => chosenNonAlcohol = items}/>
        </div>
    );
}

export default Filter;