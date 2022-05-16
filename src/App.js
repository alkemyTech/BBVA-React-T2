import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/Frontoffice/About/About'
import UserList from './Components/Users/UserList';
import Layout from './Components/Layout/Layout';
import ActivitiesForm from './Components/Frontoffice/Activities/ActivitiesForm'


function App() {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Switch>
          {/* <Route path="/" exact component={} />           Esta ruta debe ser para el Home */}
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/backoffice/edit-activity/:id" component={ActivitiesForm}/>
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
          <Route path="/about" component={About} />
          <Route exact path="/backoffice/users" component={UserList} />
        </Switch>
      </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
