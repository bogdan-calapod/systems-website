/**
 * Container component for person
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Social from '../Social'

const propTypes = {
  data: PropTypes.object
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  cursor: pointer;

  width: 450px;

  > img {
    width: 120px;
    height: 120px;
    border-radius: 30px;
    object-fit: cover;
    margin-right: 10px;
    transition: 0.4s box-shadow;
  }

  &:hover > img {
    box-shadow: 0 5px 15px rgba(0,0,0, 0.5)
  }
`

const Text = styled.div`
  display: flex;
  flex-direction: column;

  h1,
  h2 {
    margin: 0;
    font-size: 30px;
  }

  h2 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 16px;
  }
`

class PersonContainer extends Component {
  render () {
    let {name, position} = this.props.data

    return (
      <Container>
        <img alt={name} src={'/files/' + name + 'photo.jpg'} />
        <Text>
          <h1>{name}</h1>
          <h2>{position}</h2>
          <Social data={this.props.data} />
        </Text>
      </Container>
    )
  }
}

PersonContainer.propTypes = propTypes

export default PersonContainer