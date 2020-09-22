import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Sidedraw from './Sidedraw';
import Header from './Header';
import Overlay from './Overlay';
import './tailwind.output.css';
import './Header.css';
import Projects from './Projects';
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
            <About/>
            <Sidedraw show={this.state.toogled} close={this.backdropClicked}/>
            
            <div className="Projects"><Projects/></div>
            <Experiencex/> 
        </div>
        </Aux>
        
      );

    }
      
 }
  



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

