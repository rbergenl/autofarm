import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { loginUser } from '../../../actions/authActions';

export class Login extends React.Component {
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
};
import { connect } from 'react-redux';
const mapStateToProps = state => (
  { loggedIn: state.auth.loggedIn }
);
export default connect(mapStateToProps, { loginUser })(Login);