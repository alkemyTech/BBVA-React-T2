import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/Frontoffice/About/About'
import UserList from './Components/Users/UserList';
import Layout from './Components/Layout/Layout';
import ActivitiesForm from './Components/Frontoffice/Activities/ActivitiesForm'
import BackofficeLayout from './Components/Layout/BackofficeLayout';

import OrganizationForm from './Components/Backoffice/Organization/OrganizationForm';
function App() {
  return (
    <>
      <BrowserRouter>
        <BackofficeLayout> 
          <Switch>
            <Route exact path="/backoffice/users" component={UserList} />
            <Route path="/backoffice/organization/edit" component={OrganizationForm} />
            <Route path="/backoffice/edit-activity/:id" component={ActivitiesForm}/>
            </Switch>
          </BackofficeLayout>
          
          <Layout>
            <Switch>
            <Route path="/create-activity" component={ActivitiesForm} />
            <Route path="/about" component={About} />
            </Switch>
          </Layout>   
      
      </BrowserRouter>
    </>
  );
}

export default App;
