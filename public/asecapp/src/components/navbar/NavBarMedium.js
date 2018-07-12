import React from 'react';
import {Navbar} from 'react-materialize';
import {NavLink} from 'react-router-dom';
const NavBarMedium = (props)=>{
    return (
        <Navbar brand="AsecApp" style={{backgroundColor: '#d9c68c'}} right>
            {props.links.map((ele)=>{
                return <li key={ele.name} onClick={(typeof ele.func === "function")?ele.func:null} ><NavLink style={{color:'black'}} to={ele.link}>{ele.name}</NavLink></li>;
            })}
        </Navbar>
    );
}

export default NavBarMedium;