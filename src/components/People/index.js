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

  @media screen and (max-width: 900px) {
    background-image: none;
    background-color: #f7bc00;
  }
`

const List = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > div {
    margin: 10px;
  }
`

class People extends Component {
  render () {
    return (
      <Container>
        <SectionTitle light> People </SectionTitle>
        <List>
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
        </List>
      </Container>
    )
  }
}

export default People
