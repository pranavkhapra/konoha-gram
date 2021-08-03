import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import SinglePost from './components/SinglePost';
import store from './store';

const Konohagram = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <Posts />
        </Route>
        <Route path="/view/:postId" exact>
          <NavBar />
          <SinglePost />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<Konohagram />, document.getElementById('root'));
