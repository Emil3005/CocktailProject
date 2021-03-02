import React from 'react';
import {Link} from 'react-router-dom'
import Home from '../../Assets/Home.png'
import Trichter from '../../Assets/Trichter.png'
import logo from '../../Assets/LogoIcon.png'
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
                        <Link to ="/">
                            <img src={Home} className="Header-icon" alt="Home" />
                        </Link>
                        <Link to ="/Filter">
                            <img src={Trichter} className="Header-icon" alt="Trichter" />
                        </Link>
                </div>
            </div>

        </nav>
    );
}

export default Header;