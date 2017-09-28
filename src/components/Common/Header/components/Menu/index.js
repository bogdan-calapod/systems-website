/**
 * Menu bar component
 */

import React, { Component } from 'react'
import styled from 'styled-components'

import logo from './logo.svg'
import facebook from './facebook.svg'
import mail from './mail.svg'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  * {
    position: relative;
    z-index: 1;
  }

  &:before {
    position: absolute;
    width: 100%;
    height: 50vh;
    top: 0;
    left: 0;
    content: '';
    display: block;
    background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%);
    z-index: 0;
  }
`
const Logo = styled.img`
  margin: 2px 10px;
  width: 50px;
  height: 50px;

  @media screen and (max-width: 900px) {
    margin: 2px;
    width: 30px;
    height: 30px;
  }
`

const Separator = styled.div`
  flex: 1;
  height: 1px;
  background-color: white;
`

const Link = styled.a`
  text-decoration: none;
  color: white;
  padding: 0 15px;

  @media screen and (max-width: 900px) {
    padding: 0 5px;
    font-size: 14px;
  }

  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 0;

    background-color: white;
    transition: 0.4s width;
  }

  &:hover:after {
    width: 100%;
  }

  img {
    width: 20px;
    height: 20px;
  }
`

class Menu extends Component {
  render () {
    return (
      <Container>
        <Logo src={logo} />
        <Separator />
        <Link href='#'>people</Link>
        <Link href='#'>bachelor</Link>
        <Link href='#'>master</Link>
        <Link href='#'>PhD</Link>
        <Link href='#'><img alt='' src={facebook} /></Link>
        <Link href='#'><img alt='' src={mail} /></Link>
      </Container>
    )
  }
}

export default Menu
