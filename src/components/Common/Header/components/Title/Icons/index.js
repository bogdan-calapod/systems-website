/**
 * Icon row
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import phone from './phone.svg'
import window from './window.svg'
import remote from './remote.svg'
import box from './box.svg'
import radio from './radio.svg'

import phoneDark from './phoneDark.svg'
import windowDark from './windowDark.svg'
import remoteDark from './remoteDark.svg'
import boxDark from './boxDark.svg'
import radioDark from './radioDark.svg'

const propTypes = {
  large: PropTypes.bool
}

const defaultProps = {
  large: false
}

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column
`

const Container = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: ${props => props.large ? 'row' : 'column'};
  justify-content: ${props => props.large ? 'flex-start' : 'space-between'};
  flex-wrap: wrap;

  h2 {
    display: ${props => props.large ? 'block' : 'none'};
    width: 100%;
    font-weight: 400;
    font-size: 28px;
  }

  img {
    width: ${props => props.small ? '15px' : '40px'};
    height: ${props => props.small ? '15px' : '40px'};

    @media screen and (max-width: 900px) {
      width: 20px;
      height: 20px;
    }

    &:after {
      content: attr(alt)
    }
  }

  ${ImageContainer} {
    opacity: ${props => props.large ? 0.5 : 1};
    margin: ${props => props.large ? '0 10px' : '0'}
  }

  ${ImageContainer} span {
    display: ${props => props.large ? 'block' : 'none'};
    max-width: 100px;
  }
`

class Icons extends Component {
  render () {
    let {large} = this.props

    return (
      <Container {...this.props}>
        <h2> Domains </h2>
        <ImageContainer>
          <img alt='' src={large ? phoneDark : phone} />
          <span> mobile platforms </span>
        </ImageContainer>
        <ImageContainer>
          <img alt='' src={large ? windowDark : window} />
          <span> network architectures </span>
        </ImageContainer>
        <ImageContainer>
          <img alt='' src={large ? remoteDark : remote} />
          <span> peer to peer </span>
        </ImageContainer>
        <ImageContainer>
          <img alt='' src={large ? boxDark : box} />
          <span> operating systems </span>
        </ImageContainer>
        <ImageContainer>
          <img alt='' src={large ? radioDark : radio} />
          <span> wireless sensor networks </span>
        </ImageContainer>
      </Container>
    )
  }
}

Icons.propTypes = propTypes
Icons.defaultProps = defaultProps

export default Icons
