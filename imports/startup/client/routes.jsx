import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import { Dashboard } from '../../ui/components/recettes/dashboard.jsx';

Meteor.startup( () => {
  render(
    <Router history={browserHistory}>
      <Router path="/" component={ Dashboard } />
    </Router>,
    document.getElementById('render-target')
  );
});
