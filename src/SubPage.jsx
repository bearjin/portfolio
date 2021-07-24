import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageMatching from './PageMatching';
import ProjectDetail from './pages/project/ProjectDetail';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/portfolio" component={PageMatching} />
      <Route exact path="/portfolio/:name" component={PageMatching} />
      <Route path="/portfolio/project/:name" render={(props) => <ProjectDetail {...props} />} />
    </Switch>
  );
}

export default Router;