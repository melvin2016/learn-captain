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
            <img src={students} /> 
            <div class="caption left-align">
              <h3 className="white-text">Asecapp</h3>
              <h5 class="light white-text text-lighten-3">Simulating students working environment.</h5>
            </div>
          </li>
          <li>
            <img src={kerala} style={{opacity:0.7}}/> 
            <div class="caption center-align">
              <h3 className="">Built with <i class="material-icons">favorite</i>, Using</h3>
              <h5 class="light grey-text text-lighten-3">Node.js</h5>
              <h5 class="light grey-text text-lighten-3">React.js</h5>
              <h5 class="light grey-text text-lighten-3">Express.js</h5>
              <h5 class="light grey-text text-lighten-3">Mongodb</h5>
            </div>
          </li>
        </ul>
        <embed src={bgsound} autostart="true" width="0" height="0"/>
      </div>
    );
};

export default Home;