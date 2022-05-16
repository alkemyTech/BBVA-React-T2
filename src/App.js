import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/Frontoffice/About/About'
import SlidesForm from './Components/Backoffice/Slides/SlidesForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/backoffice/slides/create" component={SlidesForm} />
          <Route path="/backoffice/slides/edit/:id" component={SlidesForm} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
