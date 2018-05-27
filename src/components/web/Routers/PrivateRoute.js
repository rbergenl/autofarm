import React from 'react';
import { PropTypes } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

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

export default PrivateRoute;