import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { loginUser } from '../../actions/authActions';

class Login extends React.Component {
    static propTypes = {
      loginUser: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
     handleSubmit() {
        this.props.loginUser('username', 'password');
      }
  
    render() {
        return(
            <Button variant="raised" color="primary" onClick={this.handleSubmit}>
                Login
            </Button>
      );
    }
}

import { connect } from 'react-redux';
const mapStateToProps = state => (
  { loggedIn: state.auth.loggedIn }
);
export default withRouter(connect(mapStateToProps, { loginUser })(Login));