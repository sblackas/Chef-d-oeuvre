import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import reportWebVitals from './reportWebVitals';

// Import des Components
import SignUp from './Components/SignUp/SignUp';


const myRouter = (
      <Router>
          <Switch>
              <Route path="/signup" component={SignUp} />
          </Switch>
      </Router>
);

ReactDOM.render(myRouter,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
