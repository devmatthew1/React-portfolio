import React from 'react';
import {NavLink} from 'react-router-dom';
import surelayPhoto from './images/surelay2.jpeg';
import mail from './images/mail.svg';
const About =(props)=>{

  
return(
    <div className="profile-row">
        <div className="profile">
            <div className="image-container"><img src={surelayPhoto} alt="MyBurger" /></div>	
            <div className="details" >
                <h1 style={{color:"#28a1b5",fontWeight:"bolder"}}>SOFTWARE AND CLOUD DEVOPS ENGINEEER</h1>
                <p>Hi i'm Shola, A Software and Cloud Devops Engineer passionate about creating software products with great user experience delivery, 
                    i'm currently working on a traffic management solution, I love JS and i'm also a UI/UX Enthusiast.
                </p>
                <p className="tools">
                    <span>Html</span>
                    <span>Js</span>
                    <span>CSS</span>
                    <span>React</span>
                    <span>firebase</span>
                    <span>Aws</span>
                    <span>Jenkin</span>
                    <span>Docker</span>
                    <span>Kubernetes</span>
                </p>
                <NavLink className="more-projects" to="/projects" style={{fontSize: "1.72rem",color: "#28a1b5",fontWeight: "500"}}>View Select Projects <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15.4051 12C15.4051 12.22 15.3251 12.42 15.1651 12.58L9.96511 17.58C9.80511 17.72 9.6051 17.8 9.4051 17.8C9.1851 17.8 8.98509 17.72 8.82509 17.56C8.52509 17.24 8.52509 16.74 8.84509 16.42L13.4451 12L8.84509 7.57999C8.52509 7.27999 8.52509 6.76 8.82509 6.44C9.12509 6.12 9.64511 6.12 9.96511 6.42L15.1651 11.42C15.3251 11.58 15.4051 11.78 15.4051 12Z" fill="#28a1b5"></path></svg></NavLink>
                
            </div>	
        </div> 
        <div className="icons">
            <a href="mailto:fadaresholamatthew@gmail.com" ><img src={mail} alt="mail" style={{width:"34px", height:"34px"}}/></a>
            <a href="https://twitter.com/Surestpanther" target="_blank" rel="noopener noreferrer" style={{paddingLeft:"10px"}} aria-label="Twitter profile link"><svg xmlns="http://www.w3.org/2000/svg" width="34px" height="34px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
            <a className="icons-middle" href="https://www.linkedin.com/in/shola-matthew/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Prfile link"><svg xmlns="http://www.w3.org/2000/svg" width="34px" height="34px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
            
            <a href="https://github.com/surelay" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile link"><svg xmlns="http://www.w3.org/2000/svg" width="34px" height="34px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
        </div>
    </div>
);

        
  
}
export default About;