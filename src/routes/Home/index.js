/**
 * Home Routing Component
 */

import React, { Component } from 'react'

import Header from 'components/Common/Header'
import About from 'components/About'
import People from 'components/People'

class Home extends Component {
  render () {
    return (
      <div>
        <Header />
        <About />
        <People />
      </div>
    )
  }
}

export default Home
