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
      projects: []
    }
  }

  componentWillMount () {
    request.get('/api/phdProjects/')
      .then(x => this.setState({...this.state, projects: x.data}))
  }

  render () {
    return (
      <Container projects={this.state.projects} />
    )
  }
}

export default PhD
