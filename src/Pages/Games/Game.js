import {React,useState} from 'react'
import './Game.css'
import DropdownSingle from '../Brands/DropdownSingle.js'

function Game () {

    const numbers= [
        {
            value: 1,
            label :'1',
        },
        {
            value:2,
            label:'2',
        },
        {
            value:3,
            label: '3',
        },
        {
            value:4,
            label: '4',
        },
        {
            value:5,
            label: '5',
        },
        {
            value:6,
            label: '6',
        },
        {
            value:7,
            label: '7',
        },
        {
            value:8,
            label: '8',
        },
        {
            value:9,
            label: '9',
        },
        {
            value:10,
            label: '10',
        },
    ];
    const genres= [
        {
            value: 1,
            label :'Kartenspiel',
        },
        {
            value:2,
            label:'Strategiespiel',
        },
        {
            value:3,
            label: 'Aufbauspiel',
        },
        {
            value:4,
            label: 'Reaktionsspiel',
        },
        {
            value:5,
            label: 'Denkspiel',
        },
        {
            value:6,
            label: 'Familienspiele',
        },
        {
            value:7,
            label: 'Trinkspiele',
        },
        {
            value:8,
            label: 'Würfelspiele',
        },
        {
            value:9,
            label: 'Deduktionsspiel',
        },
        
    ];
     const [amount, setAmount] = useState(3);
     const [genre, setGenre] = useState({});

    return(
        <div className='content'>
            <h1 className="title">Games</h1>
            <ul className ='horizontal'>
            <li className='element'><DropdownSingle title="Chose amount of player"  items={numbers} onItemsChanged={(items) => setAmount(items)}/></li>
            <li className='element'><DropdownSingle title="Chose the genre you want to play"  items={genres} onItemsChanged={(items) => setGenre(items)}/></li>
            <li> <button className='button'>Show Games</button></li>
            </ul>
            
        </div>
    )

}
export default Game