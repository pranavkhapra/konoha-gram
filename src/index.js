import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import App from './App';

const Konohagram = () => (
  <Router>
    <Switch>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(<Konohagram />, document.getElementById('root'));
