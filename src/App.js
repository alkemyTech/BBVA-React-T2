import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/Frontoffice/About/About'
import UserList from './Components/Users/UserList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/backoffice/users" component={UserList} />
        </Switch>
      </BrowserRouter>
<<<<<<< HEAD
      <div className="App"></div>
=======
>>>>>>> da9deb03a7adcc96fcbcf519394e6bbb13148c9f
    </>
  );
}

export default App;
