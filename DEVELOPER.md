
# Used Resources:

## Hydroponics
- https://github.com/novemberalpha/openag_brain_pfc1_config

## Raspberry Pi
- https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp
- https://www.raspberrypi.org/resources/learn/
- https://trinket.io/sense-hat

## AWS IoT
- https://docs.aws.amazon.com/iot/latest/developerguide/iot-sdk-setup.html
- https://github.com/aws/aws-iot-device-sdk-js
- https://medium.com/@rohanmaheshwari/using-aws-iot-with-the-js-sdk-node-to-turn-an-led-on-and-off-with-a-raspberry-pi-be43346a5bd4
- https://docs.aws.amazon.com/iot/latest/developerguide/protocols.html
- https://github.com/aws-samples/aws-iot-examples
- https://github.com/aws-samples/aws-iot-chat-example
 
## Authentication
- https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html
- https://aws.amazon.com/blogs/security/building-an-app-using-amazon-cognito-and-an-openid-connect-identity-provider/

## Serverless
- https://hackernoon.com/a-crash-course-on-serverless-with-node-js-632b37d58b44
 
## UI
- https://material-ui.com/getting-started/installation/

# Setup Project
## Node and webpack, babel, react, redux, sass and material-ui
- `npm install --save-dev webpack webpack-dev-server webpack-cli`
- create the `webpack.config.js` file
- add to package.json: `"start": "webpack-dev-server --mode development"`
- create a file `src/index.web.js`
- create a file `public.index.html` with the line `<div id="root"></div><script type="text/javascript" src="/main.js"></script></body>`
- `npm install --save-dev loglevel`
- create a file `src/config/index.js` with the code `import config from './config.json'; export default { logLevel: config.LogLevel };`
- create a file `src/config/config.json` with the code `{ "LogLevel": "silent" }`
- add to `.gitignore` the line `./src/config/config.json`
- add to `index.web.js` at the top `import * as log from 'loglevel'; import Config from './config'; log.setLevel(Config.logLevel);`

## React, babel and material-ui and sass
- `$ npm install --save-dev babel-core babel-loader babel-preset-env`
- add to `webpack.config.js` the module.rule: `{ test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']	}`
- `npm install --save react reat-dom babel-preset-react babel-preset-stage-3` (stage-3 for spread operator)
- add to `index.web.js` the followin snippet:
```javascript
import React from 'react';
import { render } from 'react-dom';
render(
  <h1>Hello World</h1>,
  document.getElementById('root'),
);
```

## Material-ui
- `npm install @material-ui/core`
- `npm install --save-dev style-loader css-loader`
- add to `webpack.config.js` the module.rule: `{ test: /\.css$/, exclude: /node_modules/, use: ['style-loader', 'css-loader'] }`
- create `src/index.css` with the code `body { margin: 0; padding: 0; font-family: 'Roboto', sans-serif; }` and add at the top of `index.web.js` the code `import './index.css';`
- add to `index.html` the following snippet: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">`
- replace in `index.web.js` the `<h1>` with `<Button variant="raised" color="primary">` and load at the top `import Button from '@material-ui/core/Button';`
- add `import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';` and `const theme = createMuiTheme();` with wrapping the button with `<MuiThemeProvider theme={theme}>`

## Redux
- `npm install --save redux react-redux redux-thunk`
- create the file `configureStore.js`.
- create the file `rootReducer.js`.
- add to `index.web.js` the following snippet: `import configureStore from './configureStore'; import { Provider } from 'react-redux'; const store = configureStore;` and wrap the themeprovider with `<Provider store={store}>`

## WebApp (manifest.json, icons, serviceworker)


