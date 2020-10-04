import React from 'react';
import correct from './images/correct.png';
import engineer from './images/engineer.png';
import githubsvg from './images/githubsvg.svg';
import click from './images/click.svg';
import './styles.css';
const Project = (props)=>{
    return(
        <div className="Project-card" >
            <div className="Circle"><img src={correct} alt="verify" /></div>
            <h1 style={{color:"#a0aec0"}}>{props.projectname}</h1>
            <p style={{color:"#a0aec0"}}>{props.aboutproject}</p>
            <p style={{padding:"10px 0px 15px 0px",fontWeight:"bold",color:"#a0aec0"}}><span><img src={engineer} alt="engineer" style={{display: "inline-block",width:"25px", height:"25px" }} /> : </span>{props.projecttool}</p>
            
            <p><a href={props.github} ><img src={githubsvg} alt="github" style={{display:"inline-block"}}/></a><a href={props.link} style={{color:"#28a1b5"}}><img src={click} alt="github" style={{display:"inline-block",width:"40px",height:"30px",}}/>View Demo</a></p>
        
        </div>
    );

}

export default Project;