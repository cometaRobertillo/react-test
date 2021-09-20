import React from 'react';
import LayoutComponent from './components/layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PageA } from './pages/pageA';
import './App.scss';

const App = () => {
  return (
    <LayoutComponent>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={PageA} />
          {/* <Route path="/pageB" component={PageA} /> */}
        </Switch>
      </Router>
    </LayoutComponent>
  );
}

export default App;
