import React from 'react';
import './filter.css';
import Dropdown from './Dropdown.js'
import Dropdown2 from './Dropdown2.js'

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
            <Dropdown2 title="Wähle Zutaten aus" items={Zutaten}/>
            <Dropdown2 title="Wähle Alkohol aus" items={Alkohol}/>
            <Dropdown2 title="Wähle Softdrinks aus" items={Softdrinks}/>
        </div>
    );
}

export default Filter;