import React, {useState} from 'react';
import Select from 'react-select';
import './Dropdown.css'

//Dropdown Fenster als Multiple Choice
function Dropdown2({title, items, onItemsChanged}) {
    var [chosenItems, setvalue] = useState();
    var Ddlhandle = (e) => {
        const value = Array.isArray(e) ? e.map(x => x.label) : [];
        setvalue(value);
        onItemsChanged(value);
    }
    return (
        <div className="Auswahl">
            {title}<Select options={items} onChange={(e) => Ddlhandle(e)}></Select>
        </div>
    );
}


export default Dropdown2;
