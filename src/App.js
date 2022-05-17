import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/Frontoffice/About/About'
import UserList from './Components/Backoffice/Users/UserList'
import UserForm from './Components/Backoffice/Users/UsersForm';
import Layout from './Components/Layout/Layout';
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
            <Route path="/backoffice/users/create" component={UserForm} />
            <Route path="/backoffice/users/edit/:id" component={UserForm} />
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
