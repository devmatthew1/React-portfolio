import React, { Component } from 'react';



 class Overlay extends Component{

    render(){

      return(
        
        <div className="overlay"  style={{transform: this.props.overlayed ? 'translateY(0)' : 'translateY(-100%)' }}>
          <div className="overlay-row">
            <div className="overlay-inner">
              <div style={{ textAlign: "center"}}>
                <h3 style={{ fontSize: "100px"}}>Surelay</h3> 
                <p style={{ fontSize: "2vh"}}>Creating magic</p>
              </div>
            </div>
          </div>
        </div>
      );

    }
      
 }
  



export default Overlay;

