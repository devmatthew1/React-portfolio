import React from 'react';
import Company from './Company';
import vdt from './images/vdt.png';
import leadway from './images/leadway.png';
import cch from './images/cch.png';
const Experience =()=>{
    
  

        const cards = [
            { 
              image:cch,
              id:'doou',
              jobTitle: 'Technical support(DevOps)',
              companyName: 'AWS Community Bootcamp by GrissTech',
              employmentType: 'Full-time', 
              duration: 'Apr 2021 – Sept 2021 . 6 mos',
              location:'Lagos, Nigeria',
              toolsUsed:'AWS, CloudFormation, Terraform, Docker , Bash scripting, Linux',
              responsibilities:
              [
                'Built React Js and PHP CodeIgniter crud application which is then deployed to a AWS EC2 instance',
                'Designed and deployed monolithic and 3-tier application architecture which includes EC2 instances in ASG, S3 and ALB',
                'Setup of CICD pipelines with AWS Code CodeBuild, AWS CodeDeploy and Jenkins actions for development, testing, and production environment, and assessing the impact of issues',
                'Used CloudFormation and Terraform to provision infrastructure on AWS with zero-downtime deployment',
                'Configured proactive monitoring and alerting on AWS cloud using CloudWatch for cost optimization',
                'Deployed different containerized React and PHP applications using Docker, Docker hub, and Jenkins for CICD pipeline. Also used ansible for configuration management for most projects'
              ]
            },

            { 
              image:vdt,
              id:'dgdyj',
              jobTitle: 'Network Engineer Intern',
              companyName: 'VDT Communications Limited',
              employmentType: 'Full-time', 
              duration: ' Jul 2019 – Dec 2019 . 6 mos ',
              location:'Lagos, Nigeria ',
              toolsUsed:'Vpn, Radio mobile,Google Earth Pro,Winbox, Routers and Microwave radio',
              responsibilities:
              [
                'Installation and support of both 3rd party and in-house software',
                'System Troubleshooting and Maintenance',
                'Installing and configuring computer hardware including peripherals',
                'Documentation and submission of weekly reports on incidents',
                'Crimping of network cables, IP sub-netting and Vlan configuration',
                'Configuration of microwave radios, routers and switch for internet communication',
                'Performed site surveys which are documented using google earth pro and radio mobile',
                'performed failure tests and carried out maintenance pop network infrastructures',
                'Network monitoring'
              ]
            },

            { 
            image:leadway,
            id:'dgiu',
            jobTitle: 'Technical Support & Network Engineer',
            companyName: 'Leadway Pensure PFA',
            employmentType: 'Full-time', 
            duration: 'Dec 2015 – Nov 2016 . 1 Yr',
            location:'Lagos, Nigeria',
            toolsUsed:'Javascript, Vmware, SysAid, Windows server, Web(Javascript,php and Sql),Routers and switches',
            responsibilities:
            [
              'Configuration and installation of routers and switches',
              'Worked with the IT Help Desk team to improve incident management',
              '	Assisted the network Administrator and the infrastructure administrator during data center relocation',
              'Worked remotely using Team Viewer to resolve network and application issues for branch staffs',
              'Created and maintained responsive mailing templates for incident management used by over 100 staffs',
              '	Updated the company’s intranet page and official website using jQuery',
              '	Performed weekend backup for disaster recovery',
              '	Worked on the front-end of the companies’ online clock-in attendance system using JavaScript connecting to the PHP backend'
            ]
          }

          ];
          
          return( cards.map((card) => {
             return <Company key={card.id} img={card.image} jobTitle={card.jobTitle} companyName={card.companyName} responsibilities={card.responsibilities} toolsUsed={card.toolsUsed} location={card.location}  duration={card.duration} employmentType={card.employmentType} /> ;})
          );
  
     
        
   }

   export default Experience;