import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { logoutUser } from '../actions/authActions';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = () => {
            this.props.logoutUser()
        }
    }
    render() {
        return(
            <div>
                <h1>Hello World, you are logged in!</h1>
                <button onClick={this.handleClick}>Logout</button>
            </div>
      );
    }
}

App.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};
import { connect } from 'react-redux';
const mapStateToProps = state => (
  { loggedIn: state.auth.loggedIn }
);
export default withRouter(connect(mapStateToProps, { logoutUser })(App));