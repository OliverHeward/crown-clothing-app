import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import Auth from './Pages/Auth/Auth';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={Auth} />
      </Switch>
    </div>
  )
}

export default App;
