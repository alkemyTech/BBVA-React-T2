import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/Frontoffice/About/About'
import UserForm from './Components/Backoffice/Users/UsersForm';
import UserList from './Components/Backoffice/Users/UserList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/backoffice/users/create" component={UserForm} />
          <Route path="/backoffice/users/edit/:id" component={UserForm} />
          <Route exact path="/backoffice/users" component={UserList} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
