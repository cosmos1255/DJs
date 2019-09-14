import md5 from 'md5';
import React from 'react';
import { Link } from 'react-router-dom';
import { withGlobalState } from 'react-globally';
import { Auth } from '../../utilities/auth';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    
    this.authenticate = this.authenticate.bind(this);
  }
  
  render() {
    return (
        <div id="homepage">
            <h1>Login</h1>
            <input type="text" placeholder="username" value={this.state.username} onChange={() => {
              this.setState({
                username: event.target.value
              });
            }} />
            <input type="text" placeholder="password" value={this.state.password} onChange={() => {
              this.setState({
                password: event.target.value
              });
            }} />
            <button onClick={this.authenticate}>login</button> 
            <Link to="/signup">Don't have an account? Sign up</Link>
        </div>
    )
  }
  
  async authenticate() {
    const hashedPassword = md5(this.state.password);
    const response = await Auth.authenticate(this.state.username, hashedPassword);
    
    // Store Authentication information and go to the next page...
    sessionStorage.setItem('auth.username', this.state.username);
    sessionStorage.setItem('auth.password', hashedPassword);
    
    this.props.setGlobalState({
      authenticated: true
    });
  }
}

export default withGlobalState(LoginPage);