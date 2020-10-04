import React from 'react';
import './styles.css';

 
const Backdrop = (props)=>{
    return(

       props.showddrop ? <div className="Backdrop" onClick={props.close}> </div> :null
          
    );
}

export default Backdrop;