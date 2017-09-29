/**
 * Button component
 */

import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  margin: 10px;
  width: 180px;
  height: 40px;
  border: 1px solid gray;

  font-family: 'Work Sans';
  font-weight: 600;
  text-transform: uppercase;

  cursor: pointer;
  outline: none;
`

class ButtonC extends Component {
  render () {
    return (
      <Button>{this.props.children}</Button>
    )
  }
}

export default ButtonC
