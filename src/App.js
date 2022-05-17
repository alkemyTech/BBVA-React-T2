<<<<<<< HEAD
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './Components/Frontoffice/About/About';
import Organization from './Components/Backoffice/Organization/Organization';
import UserList from './Components/Users/UserList';
import Layout from './Components/Layout/Layout';
import BackofficeLayout from './Components/Layout/BackofficeLayout';

=======
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Public
import Layout from "./Components/Layout/Layout";
import About from "./Components/Frontoffice/About/About";
import Contact from "./Components/Frontoffice/Contact/Contact";

//Backoffice
import BackofficeLayout from "./Components/Layout/BackofficeLayout";
import UserList from "./Components/Backoffice/Users/UserList";

import OrganizationForm from "./Components/Backoffice/Organization/OrganizationForm";
import ActivitiesBackOffice from './Components/Activities/ActivitiesBackOffice';
import UserForm from "./Components/Backoffice/Users/UsersForm";

>>>>>>> dd173da308e5bae3085840377498ed7eaba5cc74
function App() {
  return (
    <>
      <BrowserRouter>
<<<<<<< HEAD
        <BackofficeLayout> 
          <Switch>
            <Route exact path="/backoffice/users" component={UserList} />
            <Route exact path="/backoffice/organization" component={Organization} />
            </Switch>
          </BackofficeLayout>
  
          <Layout>
            <Switch>
            <Route path="/about" component={About} />
            </Switch>
          </Layout>   
      
=======
        <Switch>

          <Route exact path="/backoffice/*">
            <BackofficeLayout>
              <Switch>
                <Route exact path="/backoffice/users" component={UserList} />
                <Route path="/backoffice/users/create" component={UserForm} />
                <Route path="/backoffice/users/edit/:id" component={UserForm} />
                <Route path="/backoffice/organization/edit" component={OrganizationForm} />
                <Route exact path="/backoffice/activities" component={ActivitiesBackOffice} />
                <Route path="/backoffice/activities/edit/:id" />
              </Switch>
            </BackofficeLayout>
          </Route>

          <Route>
            <Layout>
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </Layout>
          </Route>


        </Switch>
>>>>>>> dd173da308e5bae3085840377498ed7eaba5cc74
      </BrowserRouter>
    </>
  );
}

export default App;
