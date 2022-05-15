import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/Frontoffice/About/About'
import UserList from './Components/Users/UserList';
import ActivitiesBackOffice from './Components/Activities/ActivitiesBackOffice';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/backoffice/users" component={UserList} />
          <Route exact path="/backoffice/activities" component={ActivitiesBackOffice} />
          <Route path="/backoffice/activities/edit/:id" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
