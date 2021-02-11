import React from 'react';
import Home from '../../Assets/Home.png'
import Trichter from '../../Assets/Trichter.png'
import logo from '../../Assets/CocktailCloudTransparent.png'
import "./Header.css"
const Header = () =>{
    return(
        <nav>
            <div className = "Header-header">
                <div>
                <img src={logo} className="Header-logo" alt="logo" />
                </div>
                <div className="Header-rightIcons">
                <img src={Home} className="Header-icon" alt="Home" />
                <img src={Trichter} className="Header-icon" alt="Trichter" />
                
                </div>
            </div>

        </nav>
    );
}

export default Header;