
import Select from 'react-select';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import GetDrinksImages from './GetDrinksImages';


function GetDrinksByLetter({title, letters,onItemsChanged})
{
    var[chosenItem,setvalue]=useState();
    var Ddlhandle = (e) =>
    {
        const value = Array.isArray(e)?e.map(x=>x.label):[];
        setvalue(value);
        onItemsChanged(value);
        
    }

    return(
        <div>
            {title}<Select options ={letters} onChange = {(e)=> Ddlhandle(e)}></Select> 
        </div>
    );
}


export default GetDrinksByLetter;