/**
 * People Routing Component
 */

import React, { Component } from 'react'

import Header from 'components/Common/Header'
import People from 'components/People'

class PeopleRoute extends Component {
  render () {
    return (
      <div>
        <Header small />
        <People />
      </div>
    )
  }
}

export default PeopleRoute
