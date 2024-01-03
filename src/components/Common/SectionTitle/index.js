/**
 * Section header title
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Title = styled.h1`
  width: 100%;
  flex: 1;

  margin: 0;
  padding: 25px 0;

  font-size: 40px;
  font-weight: 300;

  display: flex;
  align-items: center;
  width: 100%;
  justify-content: ${props => props.left ? 'flex-start' : 'center'};

  &:before,
  &:after {
    display: inline-block;
    content: '';
    height: 5px;
    width: ${props => props.left ? 'auto' : '100px'};
    flex: ${props => props.left ? '1' : 'none'};
    border-top: 1px solid ${props => props.color };
    border-bottom: 1px solid ${props => props.color };
    margin: 0 15px;
  }

  &:before {
    display: ${props => props.left ? 'none' : 'inline-block'}
  }

  @media screen and (max-width: 900px) {
    &:before,
    &:after {
      width: 50px;
    }
  }
  
`

const propTypes = {
  color: PropTypes.string,
  left: PropTypes.bool
}

const defaultProps = {
  color: "gray",
  left: false
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
