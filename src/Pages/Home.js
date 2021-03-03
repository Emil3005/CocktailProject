import React from 'react';
import "./Home.css";
import {Link} from 'react-router-dom';
import ArrayPictures from './ArrayPictures';

function Home() {
    return (
      <div className="HomeContent">
        <div className ="Title">
            Home
            <ArrayPictures />
        </div>
      </div>    
      
    );
  }

  export default Home