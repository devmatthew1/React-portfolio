import React from 'react';
import './Header.css';
const Project = (props)=>{
    return(
        <div className="Project-card" >
            <div className="Circle"></div>
            <h1>{props.projectname}</h1>
            <p>{props.projecttool}</p>
            <p><span>{props.link}</span><span>{props.github}</span></p>
        </div>
    );

}

export default Project;