import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/Frontoffice/About/About'
import Contact from './Components/Frontoffice/Contact/Contact';
import UserList from './Components/Backoffice/Users/UserList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/backoffice/users" component={UserList} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
