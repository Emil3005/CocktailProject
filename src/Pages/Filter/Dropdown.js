import React ,{useState} from 'react';
import Select from 'react-select';
import './Dropdown.css'


function Dropdown({title, items,onItemsChanged})
{
    
    var[chosenItems,getvalue]=useState();
    var Ddlhandle = (e) =>
    {
        getvalue(Array.isArray(e)?e.map(x=>x.label):[]);
        onItemsChanged(chosenItems);
    }  
    return(
        
        <div className="Auswahl">
            {title}<Select isMulti options ={items} onChange={Ddlhandle}></Select>
            {chosenItems}
        </div>
        
    );
}


export default Dropdown;