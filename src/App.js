import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Public components
import Layout from './Components/Layout/Layout';
import About from './Components/Frontoffice/About/About'

//Backoffice components
import UserList from './Components/Backoffice/Users/UserList';
import MembersScreen from './Components/Backoffice/Members/MembersScreen';
import MembersForm from './Components/Backoffice/Members/MembersForm';

function App() {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/backoffice/members" component={MembersScreen} />
          <Route path="/backoffice/members/create" component={MembersForm} />
          <Route exact path="/backoffice/users" component={UserList} />
        </Switch>
      </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
