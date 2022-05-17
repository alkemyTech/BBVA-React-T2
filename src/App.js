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
import Organization from './Components/Backoffice/Organization/Organization';
import OrganizationForm from "./Components/Backoffice/Organization/OrganizationForm";
import ActivitiesBackOffice from './Components/Activities/ActivitiesBackOffice';
import ActivitiesForm from './Components/Activities/ActivitiesForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/backoffice/:path?">
            <BackofficeLayout>
              <Switch>
                <Route path="/backoffice/users" component={UserList} />
                <Route path="/backoffice/organization/edit" component={OrganizationForm} />
                <Route exact path="/backoffice/activities" component={ActivitiesBackOffice} />
                <Route path="/backoffice/activities/edit/:id" component={ActivitiesForm}/>
                <Route path="/backoffice/activities/create" component={ActivitiesForm} />
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
      </BrowserRouter>
    </>
  );
}

export default App;
