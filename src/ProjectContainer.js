import React from 'react';
import Projects from './Projects';
import clapping from './images/clapping.svg';
const ProjectContainer = ()=>{
    return(
        <div className="projectsCon">
            <p className="works">Checkout some of my works<span><img src={clapping} alt="verify" style={{width:"60px", height:"60px",display:"inline-block"}}/></span></p>
            <div className="Projects">
                <Projects/>
            </div>
        </div>
        
    );

}

export default ProjectContainer;