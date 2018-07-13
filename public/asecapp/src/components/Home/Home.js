import React from 'react';
import students from './pics/students.jpg';
import kerala from './pics/kerala.jpg';
import bgsound from './sound/bgsound.mp3';
import M from 'materialize-css';
const Home = ()=>{
    var elems = document.querySelectorAll('.slider');
     M.Slider.init(elems,{height:550,interval:5000});
    return (
        <div class="slider fullscreen">
        <ul class="slides">
          <li>
            <img src={students}/> 
            <div class="caption left-align">
              <h3 className="black-text">Asecapp</h3>
              <h5 class="light black-text text-lighten-3">Simulating students working environment.</h5>
            </div>
          </li>
          <li>
            <img src={kerala}/> 
            <div class="caption center-align">
              <h3 className="">Built Using<i class="material-icons">favorite</i> By</h3>
              <h5 class="light grey-text text-lighten-3">MELVIN GEORGE</h5>
              <h5 class="light grey-text text-lighten-3">ABIJITH PA</h5>
              <h5 class="light grey-text text-lighten-3">BHARAT RAJAGOPAL</h5>
              <h5 class="light grey-text text-lighten-3">SAHAL ABDUL LATHEEF</h5>
              <h5 class="light grey-text text-lighten-3">MIKHA GEORGE</h5>
              <h5 class="light grey-text text-lighten-3">ARUN VENUGOPAL</h5>
            </div>
          </li>
        </ul>
        <embed src={bgsound}/>
      </div>
    );
};

export default Home;