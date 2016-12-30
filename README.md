## What is this?
_Remember_ is a progressive modern offline todo (go figure) web-app I built to learn about progressive webapps or PWA. It uses app shell architecture and IndexedDB to make the app available offline.

You can find out more from [the blog post here](https://medium.com/@sanchitgn/what-ive-learnt-developing-a-modern-progressive-web-app-d3abe69933fa#.j4vrlqrqs).

The [live demo](https://remember-53b67.firebaseapp.com) is hosted on firebase. Add the app to your homescreen by selecting 'Add to Homescreen' in your browser's options.

## What's in it?
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Tools I've used to bring this to life.

#### The big ones

- React
- Redux
- Webpack (ES6)
- Firebase

#### Supporting libraries

- _react-motion_ - Animation library using spring dynamics
- _redux-saga_ - Side-effects library
- _react-redux_ - React/Redux bindings
- _react-hammerjs_ - Wrapper around HammerJS
- _localforage_ - Wrapper library around IndexedDB
- _classnames_ - Utility to manage css classes
- _color-string_ - Utility to manipulate color-strings
- _shortid_ - Utility to generate unique ids
- _sw-precache_ - Generate service-worker boilerplate

## Available Scripts

In the project directory, you can run:

### `yarn start`

### `yarn run build`

### `yarn run build-offline`
