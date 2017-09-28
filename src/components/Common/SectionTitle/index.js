/**
 * Section header title
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Title = styled.h1`
  display: block;
  width: 100%;

  margin: 0;
  padding: 25px 0;

  font-size: 40px;
  font-weight: 300;

  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;

  &:before,
  &:after {
    display: inline-block;
    content: '';
    height: 5px;
    width: 100px;
    border-top: 1px solid ${props => props.light ? 'white' : 'gray'};
    border-bottom: 1px solid ${props => props.light ? 'white' : 'gray'};
    margin: 0 15px;
  }
  
`

const propTypes = {
  light: PropTypes.bool
}

const defaultProps = {
  light: false
}

class SectionTitle extends Component {
  render () {
    let {children} = this.props

    return (
      <Title {...this.props}>{children}</Title>
    )
  }
}

SectionTitle.propTypes = propTypes
SectionTitle.defaultProps = defaultProps

export default SectionTitle
