import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import Homepage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import Auth from './Pages/Auth/Auth';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';
import { setCurrentUser } from './redux/user/actions';
import './App.css';
import SignIn from './Components/SignIn/SignIn';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // destruct from props
    const {setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // If user auth is not null
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // Recieving data relating to user with .data()
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              // assign user id
              id: snapShot.id,
              // spread rest of user data to state
              ...snapShot.data()
            })
          });
        };
        this.setState(userAuth);

    });
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
          <Route path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<Auth />)} />
        </Switch>
      </div>
    )
  }
}

// Maps state to props 
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  // setCurrentUser passes {user} with dispatch. setCurrentUser executes
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

// Connect to Redux
export default connect(mapStateToProps, mapDispatchToProps)(App);
