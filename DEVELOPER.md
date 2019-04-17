# Setup Web Project

## Prerequisites
- Have a Google account
- Have a Github account and a repository created (default branch set to develop)
- Login to Cloud9 with your Github account and start a workspace attached to the repository
- Create a project in console.firebase.google.com (and enable Firestore in the Database section)

## Webpack
- `npm init --yes`
- `npm install --save-dev webpack webpack-dev-server webpack-cli`
- create the `webpack.config.js` file
- add to package.json: `"start": "webpack-dev-server --mode development"`
- create a file `src/index.web.js`
- create a file `public.index.html` with the line `<div id="root"></div><script type="text/javascript" src="/main.js"></script></body>`
- `npm install --save-dev loglevel`
- create a file `src/config/index.js` with the code `import config from './config.json'; export default { logLevel: config.LogLevel };`
- create a file `src/config/config.json` with the code `{ "LogLevel": "silent" }`
- add to `.gitignore` the line `src/config/config.json`
- add to `index.web.js` at the top `import * as log from 'loglevel'; import Config from './config'; log.setLevel(Config.logLevel);`

## React
- `$ npm install --save-dev babel-core babel-loader babel-preset-env`
- add to `webpack.config.js` the module.rule: `{ test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']	}`
- `npm install --save react react-dom babel-preset-react`
- add to `.babelrc` the code `{ "presets": ["env", "react"] }`
- - add to `index.web.js` the followin snippet:
```javascript
import React from 'react';
import { render } from 'react-dom';
render(
  <h1>Hello World</h1>,
  document.getElementById('root'),
);
```

## Router
- `npm install --save react-router-dom history`
- add to `webpack.config.js` to the devServer settings: `historyApiFallback: true`
- add to `components/Routers/RootRouter` the following snippet (include the implicit imports):
```javascript
export default class RootRouter extends Component {
  componentWillMount() {
    this.props = {
      loggedIn: true
    };
  }
  render() {
    const { loggedIn } = this.props;

    return (
      <Router history={history}>
        <Switch>
          <Route
            path="/login"
            exact
            component={Login}
          />
          <Route
            path="/register"
            exact
            component={Register}
          />
          <PrivateRoute
            path="/"
            authStatus={loggedIn}
            component={App}
          />
        </Switch>
      </Router>
    );
  }
}
```
- Login component uses `withRouter(connect());`

## Redux
- `npm install --save redux react-redux redux-thunk`
- create the file `configureStore.js`.
- create the file `reducers/index.js`.
- create the file `actions/index.js`.
- add to `index.web.js` the following snippet: `import configureStore from './configureStore'; import { Provider } from 'react-redux'; const store = configureStore;` and wrap the themeprovider with `<Provider store={store}>`
- create `actions/authActions.js`
- create `reducers/authReducer.js`

- `npm install --save-dev babel-preset-stage-2` and add to `.babelrc` (stage-2 for class propTypes)
- `npm install --save-dev babel-preset-stage-3` and add to `.babelrc` (stage-3 for spread operator)

### Container (logic)
- add withRouter() so that the location gets updated into child-components as well

### Component (presentation)
-

## Material-ui
- Run `$ npm install @material-ui/core`
- Run `$ npm install --save-dev style-loader css-loader`
- Add to `webpack.config.js` the module.rule: `{ test: /\.css$/, exclude: /node_modules/, use: ['style-loader', 'css-loader'] }`
- Create `src/index.css` with the code `body { margin: 0; padding: 0; font-family: 'Roboto', sans-serif; }` and add at the top of `index.web.js` the code `import './index.css';`
- Add to `index.html` the following snippet: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">`
- Replace in `index.web.js` the `<h1>` with `<Button variant="raised" color="primary">` and load at the top `import Button from '@material-ui/core/Button';`
- Add `import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';` and `const theme = createMuiTheme();` with wrapping the button with `<MuiThemeProvider theme={theme}>`

## Add Icons
- Run `$ npm install mdi-material-ui --save`
- Add `import Google from 'mdi-material-ui/Google';` and `<Google />`.

## Firebase Hosting and Authentication
- add to package.json `"createfirebaseconf": "firebase setup:web --json > ./src/config/firebase.json"`
- Run `$ npm install -g firebase-tools`
- Run `$ firebase login --no-localhost`
- Run `$ firebase init` and select all options (firestore, functions, hosting, database, etc..) and accept all defaults (but dont install dependencies)
- Run `$ npm --prefix ./functions install` (to now outside the firebase init do the installation of dependencies in the just generated functions folder)
- Run `$ firebase serve --port $PORT --host $IP` to check the preview locally (do CTRL+C to stop)
- Run `$ firebase deploy`

## Add Firebase to App
- At https://console.firebase.google.com the project, enable Google signin on Authentication section; and add the hosting URL to 'gemachtigde domeinen'
- Run `$ npm install --save firebase`


## WebApp (manifest.json, icons, serviceworker)


# Setup Native Project

## Prerequisites
- Have an Expo.io account
- Have an Expo client installed on an android device.
- Have Genymotion installed

## Expo and React-Native
- Add to `.gitignore` the line `.expo/*`
- Add to `.babelrc` presets `babel-preset-expo`
- Run `$ npm install -g exp react-native-cli`
- make sure package.json has: (as 'dependencies', not as 'devDependencies' and then react-native version should be same as expo sdk version; check latest npm expo version available)
```javascript
"expo": "26.0.0",
"react-native": "https://github.com/expo/react-native/archive/sdk-26.0.0.tar.gz"
```
- Run `$ npm install --save expo react-native` (important! expo should be saved under 'dependencies' and not under 'devDependencies')
- and app.json has (same sdk as in the package.json; and the name is the one given at AppRegistry.registerComponent (otherwise expo will search for the app called "main" by default):
```json
{
  "expo": {
    "name": "Croppy",
    "sdkVersion": "26.0.0"
  }
}
```
- Have `package.json` main point to `src/index.js`
- Run `$ exp login`
- Run on Cloud9: `$ exp start --tunnel` (tunnel to be able to reach it through the internet, and will start bundler itself; wait until it said "dependency graph loaded", then scan the qr code with the Expo client on an android device).
- Run on laptop: `$ exp start`, start Genymotion device, then `$ exp android`.


- In console.developers.google.com, choose at the top the correct app (already added there via creation in firebase). Choose create credentials > OAuth > Android > Run in the project 'openssl rand -base64 32 | openssl sha1 -c', use 'host.exp.exponent' as packagename, and the result, give it to 'androidClientId'.
- npm install --save-dev babel-preset-expo and add to .babelrc
- import Expo from 'expo'; Expo.Google.logInAsync(options);


### Common problems
- when loading firebase while using react-native, you might get the error "undefined self.fetch". This problem is in the fetch module, and can be solved by opening the from the Dev menu on the device the Remote JS debugger
- Install the latest version of XDE https://github.com/expo/xde/releases. If you don’t update, you will see an error similar to: `Error: Cannot find module 'exponent/tools/hashAssetFiles'...` (actually, it is because of expo should be under 'dependencies' in the package.json)
