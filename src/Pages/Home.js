import React from 'react';
import "./Home.css";
import {Link} from 'react-router-dom';
import ArrayPictures from './ArrayPictures';
import { render } from '@testing-library/react';
import { Component } from 'react';
import Trichter from '../../src/Assets/Trichter.png';

class Home extends Component {
  
  btnWasClicked(event){
    event.preventDefault();

  }
    render(){
      return (
        
        <div className="HomeContent">
          <h1>Herrzlich Willkommen zur Cocktail Cloud</h1>
            <div>
              Sie haben Lust auf einen Cocktail, wissen aber nicht welchen Sie mit den Zutaten, die sie Zuhause haben, machen können?
              <br></br>
              Dann klicken Sie auf einfach auf Filter, geben ihre Zutaten ein und wählen Sie einen Cocktail aus.
                <div> 
                  <Link to ="/Filter">
                    <button className="btn">Filter</button>
                  </Link>
                </div>
            </div>
            <div>
              Sie haben ihre Freune beisammen und wollt ein paar Spiele spielen?<br></br>
              Auch da helfen wir Ihnen gerne, mit unserer Auswahl an passenden Gesellschaftsspielen.<br></br>
              <Link to ="/Filter">
                  <button className="btn">Gesellschaftsspiele</button>
                  </Link>
            </div>
            <div>
              Außerderm bieten wir auch noch eine Wetterauskunft an. Weil warum auch nich :D
            </div>
            <div className ="Title">
                <ArrayPictures />
            </div>
        </div>    
    
      );
    }
  }

  export default Home