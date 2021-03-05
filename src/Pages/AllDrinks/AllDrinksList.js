import React,{useState} from 'react';
import GetDrinksByLetter from './GetDrinksByLetter';

const alphabet= [
    {label: 'a' , value: 0},
    {label: 'b' , value: 1},
    {label: 'c' , value: 2},
    {label: 'd' , value: 3},
    {label: 'e' , value: 4},
    {label: 'f' , value: 5},
    {label: 'g' , value: 6},
    {label: 'h' , value: 7},
    {label: 'i' , value: 8},
    {label: 'j' , value: 9},
    {label: 'k' , value: 10},
    {label: 'l' , value: 11},
    {label: 'm' , value: 12},
    {label: 'n' , value: 13},
    {label: 'o' , value: 14},
    {label: 'p' , value: 15},
    {label: 'q' , value: 16},
    {label: 'r' , value: 17},
    {label: 's' , value: 18},
    {label: 't' , value: 19},
    {label: 'u' , value: 20},
    {label: 'v' , value: 21},
    {label: 'w' , value: 22},
    {label: 'x' , value: 23},
    {label: 'y' , value: 24},
    {label: 'z' , value: 25},
];
const AllDrinksList = () =>{
    const [chosenLetter, setChosenLetter] = useState({});
    return(
        <div>
            <GetDrinksByLetter title="Wähle Anfangsbuchstaben aus" letters={alphabet} onItemsChanged={(items) => setChosenLetter(items)}/>
            hallo: {chosenLetter}
        </div>
    );
}

export default AllDrinksList;