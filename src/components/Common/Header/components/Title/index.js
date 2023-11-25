/**
 * Title display
 */

import React, { Component } from 'react'
import styled from 'styled-components'

import Icons from './Icons'

const Container = styled.div`
  height: 90%;

  display: ${props => props.small ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  /* position: relative;
  width: fit-content;
  margin: auto; */
`

/*
const BlurredOverlay = styled.div`
  position: absolute;
  content: '';
  width: 100%;
  height: 30%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(1px);
`;
*/


const Text = styled.div`
  color: white;
  z-index: 1;

  h1,
  h2 {
    position: relative;
    margin: 0;
    text-align: right;
    font-size: 100px;
    animation-name: slideIn;
    animation-duration: 1s;
    animation-delay: 0.5s;
    animation-fill-mode: both;

    @media screen and (max-width: 900px) {
      font-size: 40px;
    }
  }

  h1 {
    animation-delay: 0.8s;
  }

  h2 {
    font-size: 80px;
    font-weight: 300;
    margin-bottom: -30px;
    
    @media screen and (max-width: 900px) {
      font-size: 30px;
      margin-bottom: -10px;
    }
  }

  padding-right: 10px;
  margin-right: 10px;
  border-right: 2px solid white;

  @keyframes slideIn {
    from {transform: translateX(-100px); opacity: 0}
    to {transform: translateX(0px); opacity: 1}
  }
`

class Title extends Component {
  render () {
    return (
      <Container {...this.props}>
        <Text>
          <h2>develop</h2>
          <h1>your skills</h1>
        </Text>
        <Icons />
      </Container>
    )
  }
}

export default Title
