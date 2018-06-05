//import { AppRegistry } from 'react-native';
//import App from './components/native/App';

import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

// Router
import { NativeRouter } from 'react-router-native';
import Root from './containers-native/Root';
//import history from './lib/history';

// Redux
import configureStore from './configureStore';
import { Provider } from 'react-redux';
const store = configureStore;

class HelloWorld extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Root />
        </NativeRouter>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('main', () => HelloWorld);
