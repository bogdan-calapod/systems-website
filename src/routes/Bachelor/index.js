/**
 * Home Routing Component
 */

import React, { Component } from 'react'

import Container from 'components/Bachelor'

import request from 'axios'

class Bachelor extends Component {
  constructor (props) {
    super(props)

    this.state = {
      projects: [],
      courses: []
    }
  }

  componentWillMount () {
    request.get('/api/projects/')
      .then(x => this.setState({...this.state, projects: x.data}))
  }

  render () {
    return (
      <Container projects={this.state.projects.filter(x => x.type === 'bachelor')}
        courses={this.state.courses} />
    )
  }
}

export default Bachelor
