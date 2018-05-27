/**
 * Router component in charge of navigation when not signed in
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from '../components-web/Auth/Login';
import Register from '../components-web/Auth/Register';
import App from './App';

import { connect } from 'react-redux';
import { loggedInStatusChanged } from '../actions/authActions';


/**
 * Component that redirects user to the login page if not signed in
 */
const PrivateRoute = ({ component: TheComponent, authStatus, ...restOfProps }) => (
  <Route
    {...restOfProps}
    render={props => (
      authStatus === false ?
        (<Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />) :
        (<TheComponent {...props} />)
    )}
  />
);

PrivateRoute.propTypes = {
  authStatus: PropTypes.bool.isRequired,
  component: PropTypes.func,
  location: PropTypes.object,
};

PrivateRoute.defaultProps = {
  component: null,
  location: null,
};

class RootRouter extends Component {
  
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    loggedInStatusChanged: PropTypes.func.isRequired
  }
  
  componentWillMount() {
    this.validateUserSession();
  }

  // Check browser sessionStorage to check logged in status
  validateUserSession() {
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
      this.props.loggedInStatusChanged(true);
    } else {
      this.props.loggedInStatusChanged(false);
    }
  }

  render() {
    const { loggedIn } = this.props;

    return (
        <Switch>
          <Route
            path="/login"
            exact
            component={Login}
          />
          <Route
            path="/register"
            exact
            component={Register}
          />
          <PrivateRoute
            path="/"
            authStatus={loggedIn}
            component={App}
          />
        </Switch>
    );
  }
}

const mapStateToProps = state => (
  { loggedIn: state.auth.loggedIn }
);


export default connect(mapStateToProps, { loggedInStatusChanged })(RootRouter);