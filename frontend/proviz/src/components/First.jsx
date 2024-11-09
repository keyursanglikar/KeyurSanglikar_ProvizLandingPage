import React from 'react';
import {Link} from 'react-router-dom';
import './styles/First.css';

const First = () => {
    return (
        <div className="intro-container">
          
                <h1 className="header-title">Proviz School</h1>
                <h3 className="header-title2">OF   <span className="highlight-ai"> AI</span></h3>
                <h2 className="header-title3"> Educational Institute</h2>
               
        
            <Link to="/Proviz">
                <button className="explore-btn">Explore</button>
                     </Link>

           
        </div>
        
     
    );
};

export default First;
