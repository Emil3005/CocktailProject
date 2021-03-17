import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

function Game({match}){
    let filter_information;
    let txtfilter;
    const [items, setItems] = useState([]);

    
    
    useEffect(() => {
        
        txtfilter = `${match.params.chosenAlcohol}`;
        if(txtfilter.startsWith(',')){
            filter_information[0]=5;
        }
        filter_information = txtfilter.split(',')
        fetchGames();
        console.log(match);
    },[]);
    

    const fetchGames = async () =>{
        
        
        const games = await fetch(
            `http://localhost:8090/game/getGame?player=5&genre1=&genre2=&genre3=`
        );
        const items = await games.json();
        setItems(items);
        console.log(items);

    }
    return(
        <div>
        

            Hallo
        </div>
    )
}
export default Game;