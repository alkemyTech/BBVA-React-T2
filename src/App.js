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
// import OrganizationForm from "./Components/Backoffice/Organization/OrganizationForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          
          <Route exact path="/backoffice/:path?">
            <BackofficeLayout>
              <Switch>
                <Route path="/backoffice/users" component={UserList} />
                {/* <Route path="/backoffice/organization/edit" component={OrganizationForm} /> */}
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
