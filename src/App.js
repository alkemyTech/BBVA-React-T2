import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/Frontoffice/About/About'
import UserList from './Components/Users/UserList';
import Layout from './Components/Layout/Layout';

import OrganizationForm from './Components/Backoffice/Organization/OrganizationForm';
function App() {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/backoffice/users" component={UserList} />
          <Route path="/backoffice/organization/edit" component={OrganizationForm} />
        </Switch>
      </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
