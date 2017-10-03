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
      courses: [],
      people: []
    }
  }

  componentWillMount () {
    request.get('/api/projects/')
      .then(x => this.setState({...this.state, projects: x.data.filter(x => x.type === 'bachelor')}))

    request.get('/api/courses/')
      .then(x => this.setState({...this.state, courses: x.data.filter(x => x.type === 'bachelor')}))

    request.get('/api/people/')
      .then(x => this.setState({...this.state, people: x.data}))
  }

  render () {
    return (
      <Container projects={this.state.projects}
        courses={this.state.courses}
        people={this.state.people} />
    )
  }
}

export default Bachelor
