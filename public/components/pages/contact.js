import React from 'react'
import { withGlobalState } from 'react-globally'

class ContactPage extends React.Component {
  render() {
    return (
      <div>Contact Page</div>
    )
  }
}

export default withGlobalState(ContactPage);