import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/Frontoffice/About/About'
import SlidesForm from './Components/Backoffice/Slides/SlidesForm';
import UserList from './Components/Users/UserList';
import Layout from './Components/Layout/Layout';


function App() {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/backoffice/slides/create" component={SlidesForm} />
          <Route path="/backoffice/slides/edit/:id" component={SlidesForm} />
          <Route exact path="/backoffice/users" component={UserList} />
        </Switch>
      </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
