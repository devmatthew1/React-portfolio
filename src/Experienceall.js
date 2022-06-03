import React from 'react';
import Experience from './Experience';
import tech from './images/desktop.svg';
import download from './images/download.svg';
const Experiencex =(props)=>{

  
return(
    <div className="row">
        <div className="box-inner pt-4 ">
            <div className="image-exp">
                <a style={{color:"#28a1b5",fontWeight:"bolder",marginBottom:"15px",display:"block"}} href="">DOWNLOAD RESUME <img src={download} alt="engineer" style={{display: "inline-block",width:"25px", height:"25px" }} /></a>
                <img src={tech} alt="illustr" className="Exp-ill"/>
            </div>
            <ul className="list-unstyled">    
                <div id="list-item-2" style={{color:"#28a1b5"}}><h1>Experience</h1></div>
                <Experience/>
            </ul>
        </div>
	</div>
);

        
  
}
export default Experiencex;