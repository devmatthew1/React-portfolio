import React, { Component } from 'react';
import Project from './Project';
import './Header.css';
class Projects extends Component{
    
  
      render(){

        const cards = [
            { id:'ooj',title: 'Card1',link: 'mylink',github: 'mygithub', cardtext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.' },
            { id:'ofj',title: 'Card2',link: 'ourlink',github: 'ourgithub', cardtext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.' },
            { id:'aoj',title: 'Card3',link: 'theirlink',github: 'theirgithub', cardtext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.' }
          ];
  
          return( cards.map((card) => { return <Project key={card.id}projectname={card.title} projecttool={card.cardtext} link={card.link} github={card.github} /> ;})
          );
  
      }
        
   }

   export default Projects;