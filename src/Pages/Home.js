import React from 'react';
import "./Home.css";
import {Link} from 'react-router-dom';
import ArrayPictures from './ArrayPictures';
import { Component } from 'react';
import Trichter from '../Assets/Trichter.png'
import Dice from '../Assets/Dice.png'
import Weather from '../Assets/Weather.png';


class Home extends Component {
  
  btnWasClicked(event){
    event.preventDefault();

  }
    render(){
      return (
        
        <div className="HomeContent">
          <div>
            <ul className="HomeContentList">
              <ul className= "HomeContentListHorizontal">
                <li>
                  <li>
                    You are interested in drinking a nice Cocktail, but dont know which one, then you came to the right place.
                  </li>
                  <li>
                    Just check the ingredients you want to drink or have at home and let us present you our suggestions.
                  </li>
                  <li>
                  <Link to ="/Filter">
                    <img src={Trichter} className="HomeContentIcon" alt="Filter" />
                  </Link>
                </li>
                </li>
                
              </ul>
              <ul className= "HomeContentListHorizontal">
                <li>
                  <li>
                    You want to play some Games during drinking, then try out our Variety of Board, Card and Drinking Games.
                  </li>
                  <li>
                    Just klick on the Dice, pick your genres and chose your amount of players.
                  </li>
                  <Link to ="/Game">
                  <img src={Dice} className="HomeContentIcon" alt="Games" />
                </Link>
                </li>
                <li>
                
                </li>
              </ul>
              <ul className= "HomeContentListHorizontal">
                <li>
                  <li>
                  Besides that we also offer a weather api.
                  </li>
                  <Link to ="/City">
                    <img src={Weather} className="HomeContentIconWeather" alt="Weather" />
                  </Link>
                </li>
                <li>
                  
                </li>
              </ul>
              <hr></hr>
              <li>
                Below you see 20 random Cocktails, if one strikes your eye, just klick on it.
              </li>

            </ul>
          </div>

          <div className ="Title">
                <ArrayPictures />
          </div>
        </div>    
            
            
    
      );
    }
  }

  export default Home