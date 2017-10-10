/**
 * Home Routing Component
 */

import React, { Component } from 'react'

import Container from 'components/PhD'

import request from 'axios'

class PhD extends Component {
  constructor (props) {
    super(props)

    this.state = {
      projects: [],
      collaborators: [],
      people: []
    }
  }

  componentWillMount () {
    request.get('/api/phdProjects/')
      .then(x => this.setState({...this.state, projects: x.data}))

    request.get('/api/collaborators/')
      .then(x => this.setState({...this.state, collaborators: x.data}))

    request.get('/api/people/')
      .then(x => this.setState({...this.state, people: x.data}))
  }

  render () {
    return (
      <Container projects={this.state.projects}
        collaborators={this.state.collaborators}
        people={this.state.people} />
    )
  }
}

export default PhD
