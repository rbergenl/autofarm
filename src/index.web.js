// Config
import * as log from 'loglevel';
import Config from './config';
log.setLevel(Config.logLevel);

// React
import React from 'react';
import { render } from 'react-dom';

// Router
import RootRouter from './components/web/Routers/RootRouter';

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
      <RootRouter />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

/*
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
*/
