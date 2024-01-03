/**
 * Menu bar component
 */

import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'
// import Title from '../Title'

import logo from './logo.svg'
import facebook from './facebook.svg'
import mail from './mail.svg'
import notification from './notification.svg'

const propTypes = {
  toggleModal: PropTypes.func,
};

const defaultProps = {
  toggleModal: (_) => {},
};

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
    height: ${props => props.small ? '0' : '50vh'};
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

const LinkWrapper = styled.div`
  a {
    display: block;
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
  }
`

/*

        <LinkWrapper >
          <a href='mailto:#'>
            <img alt='' src={mail} />
          </a>
        </LinkWrapper>
*/

class Menu extends Component {
  render () {
    return (
      <Container {...this.props}>
        <Link to='/'>
          <Logo src={logo} />
        </Link>
        <div onClick={this.props.toggleModal}>
          <Logo src={notification}/>
        </div>

        <Separator />
        <LinkWrapper >
          <a href='/people' rel='noopener noreferrer'>
            people
          </a>
        </LinkWrapper>

        <LinkWrapper >
          <Link to='/bachelor'>
            bachelor
          </Link>
        </LinkWrapper>

        <LinkWrapper >
          <Link to='/master'>
            master
          </Link>
        </LinkWrapper>

        <LinkWrapper >
          <Link to='/phd'>
            PhD
          </Link>
        </LinkWrapper>

        <LinkWrapper >
          <Link to='/contact'>
            contact
          </Link>
        </LinkWrapper>

        {/*
        <LinkWrapper>
          <a href='http://www.facebook.com/systems.cs.pub.ro' target='_blank' rel='noopener noreferrer'>
            <img alt='' src={facebook} />
          </a>
        </LinkWrapper>
        <LinkWrapper>
          <a href='/#contact' rel='noopener noreferrer'>
            <img alt='' src={mail} />
          </a>
        </LinkWrapper> 
        */}
      </Container>
    )
  }
}

Menu.propTypes = propTypes
Menu.defaultProps = defaultProps

export default Menu
