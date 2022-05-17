import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Public
import Layout from './Components/Layout/Layout';
import About from './Components/Frontoffice/About/About'
import UserList from './Components/Users/UserList';

//Backoffice
import BackofficeLayout from './Components/Layout/BackofficeLayout';
import MembersScreen from './Components/Backoffice/Members/MembersScreen';
import MembersForm from './Components/Backoffice/Members/MembersForm';
import OrganizationForm from './Components/Backoffice/Organization/OrganizationForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <BackofficeLayout> 
          <Switch>
            <Route exact path="/backoffice/users" component={UserList} />
            <Route path="/backoffice/organization/edit" component={OrganizationForm} />
            <Route path="/backoffice/members" component={MembersScreen} />
            <Route path="/backoffice/members/create" component={MembersForm} />
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
