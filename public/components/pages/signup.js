import React from 'react'
import { withGlobalState } from 'react-globally'

// Needs to set authenticated and username / password like the login page.
class SignupPage extends React.Component {
  render() {
    return (
      <div>Signup Page</div>
    )
  }
}

export default withGlobalState(SignupPage);