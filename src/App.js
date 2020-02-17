import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import Auth from './Pages/Auth/Auth';
import { auth } from './Firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

export default App;
