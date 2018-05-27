// Config
import * as log from 'loglevel';
import Config from './config';
log.setLevel(Config.logLevel);

// React
import React from 'react';
import { render } from 'react-dom';

// Material-UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme();
import './index.css';
import Button from '@material-ui/core/Button';

// Redux
import configureStore from './configureStore';
import { Provider } from 'react-redux';
const store = configureStore;


render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Button variant="raised" color="primary">
        Hello World
      </Button>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

/*
import RootRouter from './components/Routers/RootRouter';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
        <RootRouter />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
*/
