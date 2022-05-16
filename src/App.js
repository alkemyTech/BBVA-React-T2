import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/Frontoffice/About/About'
import UserForm from './Components/Backoffice/Users/UsersForm';
import UserList from './Components/Backoffice/Users/UserList';
import UserList from './Components/Users/UserList';
import Layout from './Components/Layout/Layout';


function App() {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
        </Switch>
      </Layout>
        <Route path="/backoffice/users/create" component={UserForm} />
        <Route path="/backoffice/users/edit/:id" component={UserForm} />
        <Route exact path="/backoffice/users" component={UserList} />
      </BrowserRouter>
    </>
  );
}

export default App;
