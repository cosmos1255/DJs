import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { withGlobalState } from 'react-globally'
import './app.css';

import ContactPage from './pages/contact';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';

class App extends React.Component {
  render() {
    if (this.props.globalState.authenticated) {
      return (
        <BrowserRouter>
            <Route exact path="/" component={ContactPage} />
        </BrowserRouter>
      ) 
    }
    
    return (
      <BrowserRouter>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
      </BrowserRouter>
    )
  }
}

export default withGlobalState(App);