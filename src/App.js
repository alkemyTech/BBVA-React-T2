import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Public
import Layout from './Components/Layout/Layout';
import About from './Components/Frontoffice/About/About'

//Backoffice
import BackofficeLayout from './Components/Layout/BackofficeLayout';
import UserList from './Components/Backoffice/Users/UserList';
import MembersScreen from './Components/Backoffice/Members/MembersScreen';
import MembersForm from './Components/Backoffice/Members/MembersForm';
// import OrganizationForm from './Components/Backoffice/Organization/OrganizationForm';

function App() {
  return (
    <>
      <BrowserRouter>
          <Switch>

            <BackofficeLayout> 
                <Route exact path="/backoffice/users" component={UserList} />
                {/* <Route path="/backoffice/organization/edit" component={OrganizationForm} /> */}
                <Route path="/backoffice/members" component={MembersScreen} />
                <Route path="/backoffice/members/create" component={MembersForm} />
            </BackofficeLayout>

            <Layout>
                <Route path="/about" component={About} />
            </Layout>   

          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
