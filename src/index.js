//import { AppRegistry } from 'react-native';
//import App from './components/native/App';

import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

// Router
import { NativeRouter } from 'react-router-native';
import AuthExample from './containers-native/Root';
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
          <AuthExample />
        </NativeRouter>
      </Provider>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});


AppRegistry.registerComponent('main', () => HelloWorld);
