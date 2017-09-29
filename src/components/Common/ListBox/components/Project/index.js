/**
 * Project component
 */

import React, { Component } from 'react'
import styled from 'styled-components'

import Button from 'components/Common/Button'

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;

  padding: 0 5px;

  > * {
    flex: 1;
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
    min-width: 200px;
  }

  &:nth-child(odd) {
    background-color: white;
  }
`

class Project extends Component {
  render () {
    let {name, teachers} = this.props.data

    return (
      <Container>
        <h2>{name}</h2>
        <p>{teachers}</p>
        <Button> Details </Button>
      </Container>
    )
  }
}

export default Project
