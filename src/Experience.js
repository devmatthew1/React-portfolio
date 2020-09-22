import React from 'react';
import Company from './Company'
const Experience =()=>{
    
  

        const cards = [
            { 
              id:'dgdyj',
              jobTitle: 'Network Engineer Intern',
              companyName: 'VDT Communications Limited',
              employmentType: 'Full-time', 
              duration: ' Jul 2019 – Dec 2019 . 6 mos ',
              location:'Lagos, Nigeria ',
              toolsUsed:'Vpn, Radio mobile,Google Earth Pro,Winbox, Routers and Microwave radio',
              responsibilities:
              [
                'Configuration of microwave radios, routers and switch for internet communication',
                'Performed site surveys which are documented using google earth pro and radio mobile',
                'performed failure tests and carried out maintenance pop network infrastructures',
                'Network monitoring'
              ]
            },

            { 
            id:'dgiu',
            jobTitle: 'Technical Support Intern',
            companyName: 'Leadway Pensure PFA',
            employmentType: 'Full-time', 
            duration: 'Dec 2015 – Nov 2016 . 1 Yr',
            location:'Lagos, Nigeria',
            toolsUsed:'Javascript, Vmware, SysAid, Windows server, Web(Javascript,php and Sql),Routers and switches',
            responsibilities:
            [
              'Performed system maintenance troubleshot computing and technological issues for over 100 staffs (locally and remotely)',
              'Collaborated with the IT Help Desk team to improve incident management',
              'Collaborated with the network Administrator and the infrastructure administrator for data centre relocation',
              'Switch and router configuration',
              'Provision of application support on intranet-based software',
              'Setup of office email manually on the phone of staffs(either POP, IMAP or exchange)',
              'Created an Html mail platform for incident management',
              'Updated the intranet WebPages using javascript' 
            ]
          },
          { 
            id:'doou',
            jobTitle: 'System administrator Intern',
            companyName: 'Ifelodun Skill Centre',
            employmentType: 'Full-time', 
            duration: 'May 2013 – Jul 2013 . 3 mos',
            location:'Lagos, Nigeria',
            toolsUsed:'Packet tracer, Windows server, Routers and switches',
            responsibilities:
            [
              'Responsible for the maintenance, configuration, and reliable operation of computer systems, network servers',
              'Installed and upgraded computer components and software, manage servers, and integrated automation processes',
              'Troubleshoot hardware and software errors by running diagnostics, documenting problems and resolutions, prioritizing problems, and assessing the impact of issues' 
            ]
          }
          ];
          
          return( cards.map((card) => {
             return <Company key={card.id} jobTitle={card.jobTitle} companyName={card.companyName} responsibilities={card.responsibilities} toolsUsed={card.toolsUsed} location={card.location}  duration={card.duration} employmentType={card.employmentType} /> ;})
          );
  
     
        
   }

   export default Experience;