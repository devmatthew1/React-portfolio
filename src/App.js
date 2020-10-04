import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Sidedraw from './Sidedraw';
import Header from './Header';
import Overlay from './Overlay';
import ProjectContainer from './ProjectContainer';
import Experiencex from './Experienceall';
import Aux from './Lux';
import About from './About';


 class App extends Component{
  state = {
    toogled: false,
    onoverlay: true
  }

  toogleClicked = () => {
    this.setState({toogled: true});
  }

  componentDidMount = () => {
    setTimeout(()=>{this.setState({onoverlay: false})},3000)
   
  }

  backdropClicked = () => {
    
    this.setState({toogled: false});
  }

    render(){

      return(
       
          <Aux>
           
            <Overlay overlayed={this.state.onoverlay} />
            
            <div>
              <Header toogler={this.toogleClicked}/>
              <Route path="/" exact component={About}/>
              <Route path="/projects" component={ProjectContainer}/>
              <Route path="/experience" component={Experiencex}/>
               
              <Sidedraw show={this.state.toogled} close={this.backdropClicked}/>
              <div className="mark"><p>© 2020 Fadare Shola - All rights reserved</p></div>
            </div>
        </Aux>
        
        
        
      );

    }
      
 }
  



export default App;

