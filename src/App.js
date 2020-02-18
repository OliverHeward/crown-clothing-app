import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import Auth from './Pages/Auth/Auth';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // If user auth is not null
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // Recieving data relating to user with .data()
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              // assign user id
              id: snapShot.id,
              // spread rest of user data to state
              ...snapShot.data()
            }
          }, () => console.log(this.state));
        });
        // else if user is null
      } else {
        this.setState({currentUser: userAuth});
      }

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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
