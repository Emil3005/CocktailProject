import React from 'react';
import './filter.css';
import Dropdown from './Dropdown.js'

const Alkohol= [
    {
        id: 1,
        value :'Gin',
    },
    {
        id:2,
        value:'Vodka',
    },
    {
        id:3,
        value: 'Whiskey',
    },
];
const Zutaten= [
    {
        id: 1,
        value :'Zitrone',
    },
    {
        id:2,
        value:'Orange',
    },
    {
        id:3,
        value: 'Basilikumblätter',
    },
];
const SoftDrink= [
    {
        id: 1,
        value :'Tonic Water',
    },
    {
        id:2,
        value:'Orangensaft',
    },
    {
        id:3,
        value: 'Ananassaft',
    },
    {
        id:4,
        value: 'Bananensaft',
    },
    {
        id:5,
        value: 'Multivitaminsaft',
    },
    {
        id:6,
        value: 'Apfelsaft',
    },
    {
        id:7,
        value: 'Grenadinensirup',
    },
    {
        id:8,
        value: 'Maracujasirup',
    },
];

const Filter = () =>{
    return(
        <div className= "FilterFunctions">
            <Dropdown title="Select Alkohol" items={Alkohol} multiSelect/>
            <Dropdown title="Select SoftDrinks" items={SoftDrink} multiSelect/>
            <Dropdown title="Select Zutaten" items={Zutaten} multiSelect/>
            <Dropdown title="Select Zutaten" items={Zutaten} multiSelect/>
            
        </div>
    );
}
export default Filter;