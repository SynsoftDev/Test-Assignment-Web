import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { NotFound } from './components'

import  VideoList from './views/videoListPage/Videolist'
import  VideoDetail from './views/videoDetailPage/Videodetail'

const routing = (
    <Router>
      <div>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/videolist" component={VideoList} />
            <Route path="/videodetail" component={VideoDetail} />
            <Route component={NotFound} />
          </Switch>
      </div>
    </Router>
  )


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
