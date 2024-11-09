import React from 'react';
import First from './components/First';

import backVideo from './assets/videos/back.mp4';
const Home = () =>{
    return(

       <div>
        <div id="background">
        <video autoPlay loop muted>
          <source src={backVideo} type="video/mp4" />
        </video>
      </div>

         <First/>
       </div>
       );
      };



export default Home;