import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/layout';
import { PageA } from './pages/pageA';
import './App.scss';

const App = () => {
  return (
    <>
      <Layout>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={PageA} />
            {/* <Route path="/pageB" component={PageA} /> */}
          </Switch>
        </Router>
      </Layout>
    </>
  );
}

export default App;
