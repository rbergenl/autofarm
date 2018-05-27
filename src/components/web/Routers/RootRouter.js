import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';
import App from '../App';
import history from '../../lib/history';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import { loggedInStatusChanged } from '../../actions/authActions';

/**
 * Router component in charge of navigation when not signed in
 */
export class RootRouter extends Component {
  componentWillMount() {
    this.validateUserSession();
  }

  /**
   * Check browser sessionStorage to check logged in status
   */
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
      <Router history={history}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route
            path="/register"
            exact
            component={Register}
          />
          <PrivateRoute authStatus={loggedIn} path="/" component={App} />
        </Switch>
      </Router>
    );
  }
}

RootRouter.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loggedInStatusChanged: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  { loggedIn: state.auth.loggedIn }
);

export default connect(mapStateToProps, { loggedInStatusChanged })(RootRouter);