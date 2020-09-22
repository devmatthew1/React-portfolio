import React from 'react';
import NavItem from './Navitem'
import './Header.css';
const Navitems = ()=>{
    return(
        <div className="nav-items">
            <NavItem link="/">Projects</NavItem>
            <NavItem link="/">Resume</NavItem>
            <NavItem link="/">Hire me</NavItem>
        </div>
    );

}

export default Navitems;