import React from 'react';
import {Navbar ,Icon } from 'react-materialize';
import { NavLink, Link } from 'react-router-dom';

const NavBarMedium = ()=>{
    return (
        <Navbar brand="AsecApp" left>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
        </Navbar>
    );
}

export default NavBarMedium;