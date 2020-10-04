import React from 'react';
import rec1 from './images/rec1.svg';
const Company =(props)=>{
var resps = props.responsibilities;
const listItems = resps.map((resp,index) =>
  <li key={index}><img src={rec1} style={{display:"inline-block",width:"16px", height:"16px",padding:"0px 5px 0px 0px"}} alt="verify" />{resp}</li>
  
);
  
return(
  
    <li className="media my-4" >
        <img className="mr-3" src={props.img} alt="Generic" style={{maxHeight:"50px",maxWidth: "50px",width:"auto",height: "auto"}}/>
        <div className="media-body">
            <ul className="list-unstyled">
            <h4 className="mt-0 mb-1"><strong>{props.jobTitle}</strong> </h4>
            <h6 ><strong>{props.companyName}</strong>  . {props.employmentType}</h6>
            <h6 >{props.duration}</h6>
            <h6 >{props.location}</h6>
            <h5 className="mt-0 mb-1"><strong>Technologies :</strong><br/>{props.toolsUsed}</h5>
            <h5><strong>Responsibilities :</strong></h5>
            {listItems}
            </ul>
        </div>
    </li>

);

        
  
}

   export default Company;