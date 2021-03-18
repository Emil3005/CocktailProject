import React from 'react';
import './Brands.css';
import DropdownSingle from './DropdownSingle';
import GetBrands from './GetBrands.js';

const Alkohol = [
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
        label: 'Whiskey',
    },
    {
        value: 4,
        label: 'Rum, schwarz',
    },
    {
        value: 5,
        label: 'Rum, weiß',
    },
    {
        value: 6,
        label: 'Rum, braun',
    },
    {
        value: 7,
        label: 'Tequilla',
    },
];

var chosenAlkohol = [];

const Brands = () => {
    return (
        <div className="BrandFilter">
            <DropdownSingle title="Chose your Alcohol" items={Alkohol}
                            onItemsChanged={(items) => chosenAlkohol = items}/>
            <GetBrands/>
        </div>
    );
}

export default Brands;
