import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Public
import Layout from "./Components/Layout/Layout";
import About from "./Components/Frontoffice/About/About";
import Contact from "./Components/Frontoffice/Contact/Contact";
import Home from "./Components/Frontoffice/Home/Home";
import SignUp from "./Components/Frontoffice/SignUp/SignUp";
import Login from './Components/Frontoffice/Login/Login'
import Testimonials from './Components/Frontoffice/Testimonials/Testimonials'
import Donations from './Components/Frontoffice/Donations/Donation';
import Thanks from './Components/Frontoffice/Donations/Thanks';

//Backoffice
import BackofficeLayout from "./Components/Layout/BackofficeLayout";
import UserList from "./Components/Backoffice/Users/UserList";

import Organization from './Components/Backoffice/Organization/Organization';
import OrganizationForm from "./Components/Backoffice/Organization/OrganizationForm";
import ActivitiesBackOffice from './Components/Backoffice/Activities/ActivitiesBackOffice';
import UserForm from "./Components/Backoffice/Users/UsersForm";
import ScreenDashboard from "./Components/Backoffice/ScreenDashboard/ScreenDashboard";
import SlidesForm from "./Components/Backoffice/Slides/SlidesForm";
import CategoriesList from './Components/Backoffice/Categories/CategoriesList';
import NewsList from "./Components/Backoffice/News/NewsList";
import MembersList from './Components/Backoffice/Members/MembersList';
import MembersForm from './Components/Backoffice/Members/MembersForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>

          <Route exact path="/backoffice/*">
            <BackofficeLayout>
              <Switch>
                <Route exact path="/backoffice" component={ScreenDashboard} />
                
                <Route exact path="/backoffice/users" component={UserList} />
                <Route path="/backoffice/users/create" component={UserForm} />
                <Route path="/backoffice/users/edit/:id" component={UserForm} />
                
                <Route exact path="/backoffice/categories" component={CategoriesList} />

                <Route exact path="/backoffice/organization" component={Organization} />
                <Route path="/backoffice/organization/edit" component={OrganizationForm} />

                <Route exact path="/backoffice/activities" component={ActivitiesBackOffice} />
                <Route path="/backoffice/activities/edit/:id" />

                <Route path="/backoffice/slides/create" component={SlidesForm} />
                <Route path="/backoffice/slides/edit/:id" component={SlidesForm} />

                <Route path="/backoffice/news" component={NewsList} />

                <Route exact path="/backoffice/members" component={MembersList} />
                <Route path="/backoffice/members/create" component={MembersForm} />
                <Route path="/backoffice/members/edit/:id" component={MembersForm} />
              </Switch>
            </BackofficeLayout>
          </Route>

          <Route>
            <Layout>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/testimonials" component={Testimonials} />
                <Route path="/login" component={Login} />
                <Route path="/donar" component={Donations} />
                <Route path="/gracias" component={Thanks} />
              </Switch>
            </Layout>
          </Route>


        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;