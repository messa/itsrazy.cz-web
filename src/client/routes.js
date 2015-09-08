import React from 'react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

import App from './app/app.react';
import Home from './home/index.react';
import NotFound from './components/notfound.react';

export default (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} name="home" />
    <NotFoundRoute handler={NotFound} name="not-found" />
  </Route>
);
