import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { GameContainer } from "./GameContainer";

ReactDOM.render(<GameContainer />, document.getElementById('root'));
registerServiceWorker();
