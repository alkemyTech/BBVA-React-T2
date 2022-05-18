<<<<<<< HEAD
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/Frontoffice/About/About'
import UserList from './Components/Users/UserList';
import Layout from './Components/Layout/Layout';
import Organization from './Components/Backoffice/Organization/Organization';
=======
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
>>>>>>> dd173da308e5bae3085840377498ed7eaba5cc74

//Public
import Layout from "./Components/Layout/Layout";
import About from "./Components/Frontoffice/About/About";
import Contact from "./Components/Frontoffice/Contact/Contact";

//Backoffice
import BackofficeLayout from "./Components/Layout/BackofficeLayout";
import UserList from "./Components/Backoffice/Users/UserList";

import OrganizationForm from "./Components/Backoffice/Organization/OrganizationForm";
import ActivitiesBackOffice from './Components/Backoffice/Activities/ActivitiesBackOffice';
import UserForm from "./Components/Backoffice/Users/UsersForm";
import ScreenDashboard from "./Components/Backoffice/ScreenDashboard/ScreenDashboard";
import SlidesForm from "./Components/Backoffice/Slides/SlidesForm";
import CategoriesList from './Components/Backoffice/Categories/CategoriesList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
<<<<<<< HEAD
          <Route path="/about" component={About} />
          <Route exact path="/backoffice/users" component={UserList} />
          <Route exact path="/backoffice/organization" component={Organization} />
=======

          <Route exact path="/backoffice/*">
            <BackofficeLayout>
              <Switch>
                <Route exact path="/backoffice" component={ScreenDashboard} />
                <Route exact path="/backoffice/users" component={UserList} />
                <Route exact path="/backoffice/categories" component={CategoriesList} />
                <Route path="/backoffice/users/create" component={UserForm} />
                <Route path="/backoffice/users/edit/:id" component={UserForm} />
                <Route path="/backoffice/organization/edit" component={OrganizationForm} />
                <Route exact path="/backoffice/activities" component={ActivitiesBackOffice} />
                <Route path="/backoffice/activities/edit/:id" />
                <Route path="/backoffice/slides/create" component={SlidesForm} />
                <Route path="/backoffice/slides/edit/:id" component={SlidesForm} />
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


>>>>>>> dd173da308e5bae3085840377498ed7eaba5cc74
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
