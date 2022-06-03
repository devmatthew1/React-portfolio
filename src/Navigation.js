import React from 'react';
import NavItem from './Navitem';
import './styles.css';

const Navitems = ()=>{
    return(
        <div className="nav-items">
            <NavItem link="/">About Me</NavItem>
            <NavItem link="/projects">Projects</NavItem>
            <NavItem link="/experience">Resume</NavItem>
            <div className="nav-item"><a href="https://dev.to/surelay">Blog</a></div>
            
        </div>
    );

}

export default Navitems;