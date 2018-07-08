import React from 'react';
import {Navbar  } from 'react-materialize';
import { NavLink } from 'react-router-dom';

const NavBarMedium = ()=>{
    return (
        <Navbar brand="AsecApp" left>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
        </Navbar>
    );
}

export default NavBarMedium;