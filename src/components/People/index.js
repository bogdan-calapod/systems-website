/**
 * About container
 */

import React, { Component } from 'react'

import SectionTitle from 'components/Common/SectionTitle'

import Person from './components/Person'

import styled from 'styled-components'
import bg from './bg.jpg'

const Container = styled.div`
  background-color: #f7bc00;
  background-image: url(${bg});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: top left;
  padding-bottom: 20px;
    height: 50vh;

  @media screen and (max-width: 900px) {
    background-image: none;
  }
`

class People extends Component {
  render () {
    return (
      <Container>
        <SectionTitle light> People </SectionTitle>
        <Person />
      </Container>
    )
  }
}

export default People
