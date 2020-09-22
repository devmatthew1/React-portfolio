import React from 'react';
import './Header.css'

 
const Backdrop = (props)=>{
    return(

       props.showddrop ? <div className="Backdrop" onClick={props.close}> </div> :null
          
    );
}

export default Backdrop;