import React from 'react';
import {Link} from 'react-router-dom'
import Home from '../../Assets/Home.png'
import Stars from '../../Assets/5Stars.png'
import Trichter from '../../Assets/Trichter.png'
import logo from '../../Assets/LogoIcon.png'
import Bottle from '../../Assets/BottleIcon.png'
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
                        <Link to ="/Game">
                            <img src={Bottle} className="Bottle_Icon" alt= "Brands" />
                        </Link>
                        <Link to ="/">
                            <img src={Home} className="Header-icon" alt="Home" />
                        </Link>
                        <Link to ="/Filter">
                            <img src={Trichter} className="Header-icon" alt="Filter" />
                        </Link>
                        <Link to ="/Rating">
                            <img src={Stars} className="Header-icon" alt= "Rating" />
                        </Link>
                        
                </div>
            </div>

        </nav>
    );
}

export default Header;