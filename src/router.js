import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import HomeRoute from './routes/Home';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={HomeRoute} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
