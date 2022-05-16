import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/Frontoffice/About/About'
import UserList from './Components/Users/UserList';
import Layout from './Components/Layout/Layout';
import BackofficeLayout from './Components/Layout/BackofficeLayout';


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path="/about" component={About} />
          </Layout>
          <BackofficeLayout> 
            <Route exact path="/backoffice/users" component={UserList} />
          </BackofficeLayout>   
        </Switch>
      
      </BrowserRouter>
    </>
  );
}

export default App;
