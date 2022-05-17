import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './Components/Frontoffice/About/About'
import UserList from './Components/Users/UserList';
import Layout from './Components/Layout/Layout';
import BackofficeLayout from './Components/Layout/BackofficeLayout';
import Organization from './Components/Backoffice/Organization/Organization';

import ActivitiesBackOffice from './Components/Activities/ActivitiesBackOffice';
import OrganizationForm from './Components/Backoffice/Organization/OrganizationForm';

function App() {
  return (
    <>
        <BackofficeLayout> 
          <Switch>
            <Route exact path="/backoffice/users" component={UserList} />
            <Route path="/backoffice/organization/edit" component={OrganizationForm} />
            <Route exact path="/backoffice/activities" component={ActivitiesBackOffice} />
            <Route path="/backoffice/activities/edit/:id" />
            </Switch>
          </BackofficeLayout>
          
          <Layout>
            <Switch>
            <Route path="/about" component={About} />
            </Switch>
          </Layout>   
      </BrowserRouter>
    </>
  );
}

export default App;
