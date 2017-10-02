/**
 * About container
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SectionTitle from 'components/Common/SectionTitle'

import Person from './components/Person'

import styled from 'styled-components'
import bg from './bg.jpg'

const propTypes = {
  data: PropTypes.array
}

const defaultProps = {
  data: []
}

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
  justify-content: space-around;
  flex-wrap: wrap;

  > div {
    margin: 10px;
  }
`

class People extends Component {
  get people () {
    let people = {
      g1: [],
      g2: []
    }

    let arr = 'g1'
    let convert = arr => arr.map(
      (x, i) => <Person data={x} key={i} />
    )

    this.props.data.forEach(
      x => {
        if (x.name === 'BLANK') {
          arr = 'g2'
        } else {
          people[arr].push(x)
        }
      }
    )

    return [
      convert(people.g1),
      convert(people.g2)
    ]
  }

  render () {
    return (
      <Container>
        <SectionTitle light> People </SectionTitle>
        <List>
          {this.people[0]}
        </List>
        <List>
          {this.people[1]}
        </List>
      </Container>
    )
  }
}

People.propTypes = propTypes
People.defaultProps = defaultProps

export default People
