import React ,{useState} from 'react';
import Select from 'react-select';
import './Dropdown2.css'


function Dropdown2({title, items})
{
    
    var[chosenItems,getvalue]=useState();
    var Ddlhandle = (e) =>
    {
        getvalue(Array.isArray(e)?e.map(x=>x.label):[]);
    }  
    return(
        chosenItems,
        <div className="Auswahl">
            {title}<Select isMulti options ={items} onChange={Ddlhandle}></Select>
            {chosenItems}
        </div>
        
    );
}

export default Dropdown2;