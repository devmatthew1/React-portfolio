import React from 'react';
import Navitems from'./Navigation';
import './styles.css';
import list from './images/list.svg';
const Header = (props) =>{
	return(

        <div className="header-container">
            <div className="logo"><span style={{color: "#28a1b5"}}>Surelay</span></div>
            <div className="toogle-icon" onClick={props.toogler}><img src={list} alt="list" style={{display: "inline-block",width:"25px", height:"25px" }}/></div>
            <div className="Nav"><Navitems/></div>
           
        </div>
		

	);
}
export default Header;
 
 
 
  