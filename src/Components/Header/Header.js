import React from 'react';
import {Link} from 'react-router-dom'
import Home from '../../Assets/Home.png'
import Trichter from '../../Assets/Trichter.png'
import logo from '../../Assets/LogoIcon.png'
import Dice from '../../Assets/Dice.png'
import Weather from '../../Assets/Weather.png';
import "./Header.css"

const Header = () =>{
    
   
    return(
        
        <nav>
            <div className = "Header-header">
                <div>
                    <Link to ="/">
                        <img src={logo} className="Header-logo" alt="logo" />
                    </Link>
                </div>
                    <div className="Header-rightIcons">
                        
                        <Link to ="/Filter">
                            <img src={Trichter} className="Header-icon" alt="Filter" />
                        </Link>
                        <Link to ="/Game">
                            <img src={Dice} className="Header-icon" alt= "Games" />
                        </Link>
                        <Link to ="/City">
                            <img src={Weather} className="Header-icon" alt= "Rating" />
                        </Link>
                        <Link to ="/">
                            <img src={Home} className="Header-icon" alt="Home" />
                        </Link>
                        
                </div>
            </div>

        </nav>
    );
}

export default Header;