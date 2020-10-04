import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './tailwind.output.css';
import './styles.css';


 const app = (
   <BrowserRouter>
      <App />
   </BrowserRouter>
 );



ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

