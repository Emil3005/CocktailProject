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

const Filter = () =>{
    return(
        <div className= "FilterFunctions">
            
            <Dropdown2 title="Select Zutaten" items={Zutaten}/>
            <Dropdown2 title="Select Alkohol" items={Alkohol}/>
            <Dropdown2 title="Select Softdrinks" items={Softdrinks}/>
        </div>
    );
}
export default Filter;