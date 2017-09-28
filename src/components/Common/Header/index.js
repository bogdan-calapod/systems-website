/**
 * Header component
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Menu from './components/Menu'
import Title from './components/Title'
import bg from './img/bg.jpg'

// Component styles
const Container = styled.div`
  height: ${props => props.small ? '50vh' : '100vh'};
  background-image: url(${bg});
  background-size: cover;
  background-position: 80% 90%;
`

class Header extends Component {
  render () {
    return (
      <Container>
        <Menu />
        <Title />
      </Container>
    )
  }
}

Header.propTypes = {
  small: PropTypes.bool
}

Header.defaultProps = {
  small: false
}

export default Header
