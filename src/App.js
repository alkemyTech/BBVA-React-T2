import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/Frontoffice/About/About'
import UserList from './Components/Users/UserList';
import Layout from './Components/Layout/Layout';
import CategoriesList from './Components/Backoffice/Categories/CategoriesList';


function App() {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/backoffice/users" component={UserList} />
          <Route exact path="/backoffice/categories" component={CategoriesList} />
        </Switch>
      </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
