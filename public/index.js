import 'regenerator-runtime/runtime';
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-globally'

import App from './components/app.js';
import { Auth } from './utilities/auth'

const initialState = {
  authenticated: false,
  username: sessionStorage.getItem('auth.username'),
  password: sessionStorage.getItem('auth.password')
};

(async () => {
  try {
    const response = await Auth.authenticate(initialState.username, initialState.password);
    
    initialState.authenticated = true;
  } catch (error) {
    console.error(error);
    initialState.authenticated = false;
  }

  ReactDOM.render(
    <Provider globalState={initialState}>
      <App/>
    </Provider>, 
  document.getElementById('app'));
})();