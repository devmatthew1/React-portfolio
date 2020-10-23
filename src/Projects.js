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
            id:'ooj',
            title: 'Blue/green deployment with jenkins',
            link: 'https://github.com/surelay/capstone-final-project',
            github: 'https://github.com/surelay/capstone-final-project',
            tools: 'Aws, Jenkins, Docker, Ubuntu, Kubernetes',
            softwaredetails:'This project practically demonstrate how to create kubernetes clusters and docker containers, build a CI/CD pipline using jenkins and cloudformation to deploy software to AWS'
          },
            { 
              id:'ofj',
              title: 'Deploying Machine Learning Microservice API using Circle CI',
              link: 'https://github.com/surelay/udacity-microservices-project5',
              github: 'https://github.com/surelay/udacity-microservices-project5',
              tools: 'Aws, Circle CI, Docker, Kubernetes, Shell, Python, Makefile',
              softwaredetails:'This project demonstrate how to deploy a Microservice API to Aws using Circle CI.'
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
              id:'ajke',
              title: 'Memory Game',
              link: 'https://surelay.github.io/memory_game/',
              github: 'https://github.com/surelay/memory_game', 
              tools: 'Javascript',
              softwaredetails:"The memory game was built to derive fun from testing the ability of an individual to remember"
  
            }
          ];
  
          return( cards.map((card) => { return <Project key={card.id} aboutproject={card.softwaredetails} projectname={card.title} projecttool={card.tools} link={card.link} github={card.github} /> ;})
          );
  
      }
        
   }

   export default Projects;