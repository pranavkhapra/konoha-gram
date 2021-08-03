import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import SinglePost from './components/SinglePost';
import store from './store';

const Index = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={NavBar} />
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/view/:photoId" component={SinglePost} />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
