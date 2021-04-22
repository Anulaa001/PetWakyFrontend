import React from 'react';
import MapToShow from './MapToShow';
import './Home.css';
const Home=()=>(
    <>
    <div className="background">
      <div className="col-1"></div>
      <div className="col-2"></div>
      <div className="white-box">
         <h1>Taking care of your pet</h1>
      </div>

    </div>
       
     <MapToShow/>
     </>
)
export default Home;