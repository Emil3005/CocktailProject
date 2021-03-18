import React, {Component} from 'react';
import "./Home.css";
import {Link} from 'react-router-dom';
import ArrayPictures from './ArrayPictures';
import Trichter from '../Assets/Trichter.png'
import Dice from '../Assets/Dice.png'
import Weather from '../Assets/Weather.png';


class Home extends Component {

    btnWasClicked(event) {
        event.preventDefault();

    }

    render() {
        return (

            <div className="HomeContent">
                <div>
                    <ul className="HomeContentList">
                        <div>
                            <ul className="HomeHorizontalList">
                                <li>
                                    <ul className="HomeVerticalList">
                                        <li className="HomeListText">Find your Cocktail</li>
                                        <li className="HomeListText">Find your Game</li>
                                        <li className="HomeListText">Check your Weather</li>
                                    </ul>
                                </li>

                                <li>
                                    <ul className="HomeVerticalList">
                                        <li className="HomeListImage">
                                            <Link to="/Filter">
                                                <img src={Trichter} className="HomeContentIcon" alt="Filter"/>
                                            </Link>
                                        </li>
                                        <li className="HomeListImage">
                                            <Link to="/Game">
                                                <img src={Dice} className="HomeContentIcon" alt="Games"/>
                                            </Link>
                                        </li>
                                        <li className="HomeListImage">
                                            <Link to="/City">
                                                <img src={Weather} className="HomeContentIconWeather" alt="Weather"/>
                                            </Link>
                                        </li>
                                    </ul>

                                </li>
                            </ul>
                        </div>


                        <hr></hr>
                        <li>
                            Below you see 20 random Cocktails, if one strikes your eye, just klick on it.
                        </li>

                    </ul>
                </div>


                <div className="Title">
                    <ArrayPictures/>
                </div>
            </div>


        );
    }
}

export default Home
