import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from './Card/card'
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Product from './Product/Product';


ReactDOM.render((
  <Router>
      <Route path="/" exact component={App} />
      <Route path="/Card/card" exact component={Card} />
      <Route path="/" exact component={Product}/>
  </Router>
), document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
