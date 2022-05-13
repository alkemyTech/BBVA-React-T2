import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/Frontoffice/About/About'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/backoffice/users/create" component={UserForm} />
          <Route path="/backoffice/users/edit/:id" component={UserForm} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
