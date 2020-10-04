import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.css';
const NavItem = (props) =>{
    return(
        <div className="nav-item"><NavLink to={props.link}>{props.children}</NavLink></div>
    );
}

export default NavItem;






