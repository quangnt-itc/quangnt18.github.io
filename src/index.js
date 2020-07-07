import React from 'react';
import ReactDOM from 'react-dom';
// bootstrap
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/jquery/dist/jquery.min';
import './../node_modules/popper.js/dist/popper.min';
import './../node_modules/bootstrap/dist/js/bootstrap.min';
// ~bootstrap
import './index.css';
import './Baitap2_Review/css/style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



// đổ <App /> vào document.getElementById('root);

ReactDOM.render(
  
  <App />
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();