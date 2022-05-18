import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Public
import Layout from "./Components/Layout/Layout";
import About from "./Components/Frontoffice/About/About";
import Contact from "./Components/Frontoffice/Contact/Contact";
import ActivitiesFrontoffice from './Components/Frontoffice/ActivitiesFrontoffice/Activities'

//Backoffice
import BackofficeLayout from "./Components/Layout/BackofficeLayout";
import UserList from "./Components/Backoffice/Users/UserList";

import OrganizationForm from "./Components/Backoffice/Organization/OrganizationForm";
import ActivitiesBackOffice from './Components/Activities/ActivitiesBackOffice';
import SlidesForm from "./Components/Backoffice/Slides/SlidesForm";
import UserForm from "./Components/Backoffice/Users/UsersForm";
import CategoriesList from './Components/Backoffice/Categories/CategoriesList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>

          <Route exact path="/backoffice/*">
            <BackofficeLayout>
              <Switch>
                <Route exact path="/backoffice/users" component={UserList} />
                <Route exact path="/backoffice/categories" component={UserList} />
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
                <Route path="/activities" component={ActivitiesFrontoffice} />
              </Switch>
            </Layout>
          </Route>


        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
