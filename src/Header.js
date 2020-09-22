import React from 'react';
import Navitems from'./Navigation';
import './Header.css';
const Header = (props) =>{
	return(

        <div className="header-container">
            <div className="logo">surelay</div>
            <div className="toogle-icon" onClick={props.toogler}>icon</div>
            <div className="Nav"><Navitems/></div>
           
        </div>
		

	);
}
export default Header;
 
 
 
  