import React from 'react';
import students from './pics/students.jpg';
import kerala from './pics/kerala.jpg';
import bgsound from './sound/bgsound.mp3';
import M from 'materialize-css';
import NavLink from 'react-router-dom/NavLink';
const Home = ()=>{
    var elems1 = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems1);
    var elems = document.querySelectorAll('.slider');
     M.Slider.init(elems,{height:550,interval:5000});
    return (
        <div className="slider fullscreen">
        <ul className="slides">
          <li>
            <img src={students} alt="students"/> 
            <div className="caption left-align">
              <h3 style={{color:'#d9c68c'}}>Asecapp</h3>
              <h5 className="light #d9c68c text-lighten-3" style={{color:'#d9c68c'}}>Simulating students working environment.</h5>
            </div>
          </li>
          <li>
            <img src={kerala} style={{opacity:0.7}} alt="kerala"/> 
            <div className="caption center-align">
              <h3 className="">Built with <i className="material-icons">favorite</i>, Using</h3>
              <h5 className="light grey-text text-lighten-3">Node.js</h5>
              <h5 className="light grey-text text-lighten-3">React.js</h5>
              <h5 className="light grey-text text-lighten-3">Express.js</h5>
              <h5 className="light grey-text text-lighten-3">Mongodb</h5>
            </div>
          </li>
        </ul>
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large red">
            <i className="large material-icons">unfold_more</i>
          </a>
          <ul>
            <li className="tooltipped" data-position="left" data-tooltip="Login"><NavLink className="btn-floating blue"  to="/login"><i className="material-icons">cloud</i></NavLink></li>
            <li className="tooltipped" data-position="left" data-tooltip="Register"><NavLink className="btn-floating green"  to="/register"><i className="material-icons">create</i></NavLink></li>
          </ul>
        </div>
        <embed src={bgsound} autostart="true" width="0" height="0"/>
      </div>
    );
};

export default Home;