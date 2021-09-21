import React from 'react';
import LayoutComponent from './components/layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PageA } from './pages/pageA';
import { Login } from './pages/login';
import './App.scss';

const App = () => {
  return (
    <LayoutComponent>
      <Router>
        <Switch>
          <Route exact={true} path="/home" component={PageA} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </LayoutComponent>
  );
}


export default App;
