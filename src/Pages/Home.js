import React from 'react';
import "./Home.css";
import {Link} from 'react-router-dom';
import ArrayPictures from './ArrayPictures';
import { Component } from 'react';


class Home extends Component {
  
  btnWasClicked(event){
    event.preventDefault();

  }
    render(){
      return (
        
        <div className="HomeContent">
          <h1>Welcome to Cocktail Cloud</h1>
            <div>
              You want to make a Cocktail, but have no idea which one. Then you came to the right Place.
              <br></br>
              You can chose the Ingredients you like or the ones you have at home. We will then show you a list of Cocktails.
              <br></br>
              Just press the filter button and chose your ingredients.
                <div> 
                  <Link to ="/Filter">
                    <button className="btn">Filter</button>
                  </Link>
                </div>
            </div>
            <div>
              You want to play some Games while drinking Cocktails or just in general. Press the Games button, to see what we can offer.
              <br></br>
              <Link to ="/Game">
                  <button className="btn">Gesellschaftsspiele</button>
                  </Link>
            </div>
            <div>
              Besides that we also offer a Service to get an Insight of your weather conditions.
            </div>
            <div className ="Title">
                <ArrayPictures />
            </div>
        </div>    
    
      );
    }
  }

  export default Home