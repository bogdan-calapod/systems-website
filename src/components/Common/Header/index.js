/**
 * Header component
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Menu from './components/Menu'
import Title from './components/Title'
import bg from './img/bg.jpg'

const propTypes = {
  small: PropTypes.bool
}

const defaultProps = {
  small: false
}

// Component styles
const Container = styled.div`
  height: ${props => props.small ? '80vh' : '95vh'};
  background-image: url(${bg});
  background-size: cover;
  background-position: 80% 90%;
`

class Header extends Component {
  render () {
    return (
      <Container {...this.props}>
        <Menu />
        <Title />
      </Container>
    )
  }
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
