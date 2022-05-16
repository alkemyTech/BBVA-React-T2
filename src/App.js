import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './Components/Frontoffice/About/About';
import Organization from './Components/Backoffice/Organization/Organization';
import UserList from './Components/Users/UserList';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/backoffice/organization" component={Organization} />
          <Route exact path="/backoffice/users" component={UserList} />
        </Switch>
      </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
