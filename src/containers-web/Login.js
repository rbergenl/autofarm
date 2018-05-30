import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';

import { firebaseApp } from '../firebaseApp';


import Google from 'mdi-material-ui/Google';

export class Login extends React.Component {
    static propTypes = {
        loginUser: PropTypes.func.isRequired,
    }

    constructor(props, rest) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
		try {
	      let app = firebaseApp;
	      let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
	      document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
	    } catch (e) {
	      console.error(e);
	      document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
	    }	
	}
	
    handleSubmit() {
        this.props.loginUser('username', 'password');
    }
  
    render() {
        return(
            <Button variant="raised" color="primary" onClick={this.handleSubmit}>
                <Google />
                Login with Google
            </Button>
      );
    }
}

const mapStateToProps = state => (
  { loggedIn: state.auth.loggedIn }
);

export default withRouter(connect(mapStateToProps, { loginUser })(Login));
