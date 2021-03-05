import React from 'react';
import "./Home.css";
import {Link} from 'react-router-dom';
import ArrayPictures from './ArrayPictures';
import { render } from '@testing-library/react';
import { Component } from 'react';

class Home extends Component {
  
  btnWasClicked(event){
    event.preventDefault();

  }
    render(){
      return (
        
        <div className="HomeContent">
          <div className ="Title">
              <ArrayPictures />
          </div>
        </div>    
    
      );
    }
  }

  export default Home