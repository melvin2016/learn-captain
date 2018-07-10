import React from 'react';
import {Navbar} from 'react-materialize';
import {NavLink} from 'react-router-dom';
const NavBarMedium = (props)=>{
    return (
        <Navbar brand="AsecApp" right>
            {props.links.map((ele)=>{
                return <li key={ele.name} onClick={(typeof ele.func === "function")?ele.func:null} ><NavLink to={ele.link}>{ele.name}</NavLink></li>;
            })}
        </Navbar>
    );
}

export default NavBarMedium;