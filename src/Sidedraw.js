import React from 'react';
import './Header.css';
import NavItems from './Navigation';
import Aux from './Lux';
import Backdrop from './Backdrop';
const Sidedraw = (props)=>{
    return(
        <Aux>
            <Backdrop showddrop={props.show} close={props.close}/>
            <div className="Side-draw"  style={{transform: props.show ? 'translateX(0)' : 'translateX(100%)' }}> 
                <NavItems/>
            </div>
        </Aux>
        
    );

}

export default Sidedraw;

 

 
 
 
 