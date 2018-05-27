// Config
import * as log from 'loglevel';
import Config from './config';
log.setLevel(Config.logLevel);

// React
import React from 'react';
import { render } from 'react-dom';

// Router
import { Router } from 'react-router-dom';
import Root from './containers-web/Root';
import history from './lib/history';

// Redux
import configureStore from './configureStore';
import { Provider } from 'react-redux';
const store = configureStore;

// Material-UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme();
import './index.css';

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <Root />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

/*
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
*/
