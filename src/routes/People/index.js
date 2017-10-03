/**
 * People Routing Component
 */

import React, { Component } from 'react'

import Header from 'components/Common/Header'
import People from 'components/People'

import request from 'axios'

class PeopleRoute extends Component {
  constructor (props) {
    super(props)

    this.state = {
      people: []
    }
  }

  componentWillMount () {
    request.get('/api/people/')
      .then(x => this.setState({...this.state, people: x.data}))
  }

  render () {
    return (
      <div>
        <Header small />
        <People data={this.state.people} />
      </div>
    )
  }
}

export default PeopleRoute
