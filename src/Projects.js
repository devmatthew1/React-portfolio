import React, { Component } from 'react';
import Project from './Project';
import './styles.css';
class Projects extends Component{
    
  
      render(){

        const cards = [
          
            { 
              id:'omi',
              title: 'Burger recipe App',
              link: 'https://react-burger-app-c378b.firebaseapp.com/',
              github: 'https://github.com/surelay/React-burger-builder',
              tools: 'React and Firebase',
              softwaredetails:'This is a recipe application which is used to place order for a burger by selecting the needed ingredients'
            },

            { 
              id:'aoj',
              title: 'Weather App',
              link: 'https://surelay.github.io/myweather-application/',
              github: 'https://github.com/surelay/myweather-application', 
              tools: 'Javascript,Google Geolocation Api, Open Weather Api',
              softwaredetails:"This application provides the weather condition of a user's location using Js geolocation api and openweather api"
            },
              { 
              id:'ooj',
              title: 'Blue/green deployment with jenkins',
              link: 'https://github.com/surelay/capstone-final-project',
              github: 'https://github.com/surelay/capstone-final-project',
              tools: 'Aws, Jenkins, Docker, Ubuntu, Kubernetes',
              softwaredetails:'This project practically demonstrate how to create kubernetes clusters and docker containers, build a CI/CD pipline using jenkins and cloudformation to deploy software to AWS'
            },

            { 
              id:'ajke',
              title: 'Memory Game',
              link: 'https://surelay.github.io/memory_game/',
              github: 'https://github.com/surelay/memory_game', 
              tools: 'Javascript, Html and CSS',
              softwaredetails:"The memory game was built to derive fun from testing the ability of an individual to remember"
            },

            { 
              id:'ofj',
              title: 'Farm weather monitoring system',
              link: 'https://weatherapp4finalyear.000webhostapp.com/',
              github: 'https://github.com/devmatthew1/project-weather-monitoring-system',
              tools: 'NodeMCU, C language, Html, CSS, JavaScript and PHP',
              softwaredetails:'An IoT farm weather monitoring system to improve farming activities and plant growth.'
            },

            { 
              id:'ofy',
              title: 'Deploying Machine Learning Microservice API using Circle CI',
              link: 'https://github.com/surelay/udacity-microservices-project5',
              github: 'https://github.com/surelay/udacity-microservices-project5 https://github.com/devmatthew1/climax-software',
              tools: 'Aws, Circle CI, Docker, Kubernetes, Shell, Python, Makefile',
              softwaredetails:'This project demonstrate how to deploy a Microservice API to Aws using Circle CI.'
            },
        
            { 
              id:'ajoe',
              title: 'Portfolio Design',
              link: 'https://portfolio-b0fe3.web.app/',
              github: 'https://github.com/surelay/React-portfolio', 
              tools: 'React and firebase',
              softwaredetails:"This portfolio contain some of my works and experience as a developer"
            }, 

            { 
              id:'ajol',
              title: 'Climax',
              link: 'https://climax-101a4.web.app/',
              github: 'https://github.com/devmatthew1/climax-software', 
              tools: 'React and firebase',
              softwaredetails:"Loan app"
            }, 
            
            { 
              id:'ofj',
              title: 'Terraform module versioning',
              link: 'https://github.com/devmatthew1/terraform-module-version',
              github: 'https://github.com/devmatthew1/terraform-module-version',
              tools: 'Aws, Circle CI, Docker, Kubernetes, Shell, Python, Makefile',
              softwaredetails:'To demonstrate my knowledge in writing terraform configuration using module versioning'
            }
          ];
  
          return( cards.map((card) => { return <Project key={card.id} aboutproject={card.softwaredetails} projectname={card.title} projecttool={card.tools} link={card.link} github={card.github} /> ;})
          );
  
      }
        
   }

   export default Projects;