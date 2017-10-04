/**
 * Main contact form wrapper
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { Button } from 'components/Common/Button'

import fb from './fb.svg'
import globe from './globe.svg'
import mail from './mail.svg'
import place from './place.svg'
import bg from './bg.jpg'

const propTypes = {
}

const Container = styled.div`
  background-color: #EEEEEE;
  background-size: 50% auto;
  background-position: left;
  background-repeat: no-repeat;
  background-image: url(${bg});

  img {
    width: 30px;
    height: 30px;
  }

  width: 100%;
  box-sizing: border-box;

  padding: 10px 15% 10px 50%;
`

const Title = styled.h1`
  margin: 0;
  font-weight: 200;
  font-size: 40px;
  margin-bottom: 30px;
`

const Contact = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px 0;
`
const Item = styled.div`
  width: 50%;

  a {
    display: flex;
    align-items: center;
    color: currentColor;
  }
`

const Input = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    width: 50%;
  }

  &:last-child {
    width: 100%;
  }

  padding: 5px 5px 5px 0;
  box-sizing: border-box;

  input,
  textarea {
    border: 1px solid gray;
    background-color: transparent;
    resize: none;
    height: 30px;
  }

  textarea {
    height: 200px;
  }
`

const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ContactButton = Button.extend`
  margin-left: auto;
  margin-right: 5px;
`

class Main extends Component {
  render () {
    return (
      <Container>
        <Title> Let's keep in touch </Title>
        <Contact>
          <Item>
            <a href=''>
              <img alt='' src={fb} />
              /systems.cs.pub.ro
            </a>
          </Item>
          <Item>
            <a href=''>
              <img alt='' src={globe} />
              http://systems.cs.pub.ro
            </a>
          </Item>
          <Item>
            <a href=''>
              <img alt='' src={mail} />
              contact@systems.cs.pub.ro
            </a>
          </Item>
          <Item>
            <a href=''>
              <img alt='' src={place} />
              Splaiul Independenței 313, București
            </a>
          </Item>
        </Contact>
        <Form>
          <Input>
            <label> Name </label>
            <input type='text' />
          </Input>
          <Input>
            <label> E-mail </label>
            <input type='text' />
          </Input>
          <Input>
            <label> Message </label>
            <textarea />
          </Input>
        </Form>
        <ContactButton> Send </ContactButton>
      </Container>
    )
  }
}

Main.propTypes = propTypes

export default Main
