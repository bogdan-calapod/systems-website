/**
 * Home Routing Component
 */

import React, { Component } from 'react'

import Container from 'components/Master'

import request from 'axios'

class Master extends Component {
  constructor (props) {
    super(props)

    this.state = {
      projects: [],
      courses: []
    }
  }

  componentWillMount () {
    request.get('/api/projects/')
      .then(x => this.setState({...this.state, projects: x.data.filter(x => x.type === 'master')}))

    request.get('/api/courses/')
      .then(x => this.setState({...this.state, courses: x.data.filter(x => x.type === 'master')}))

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

export default Master
