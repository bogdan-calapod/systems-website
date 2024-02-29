/**
 * Main contact form wrapper
 */

import React, { Component } from 'react'
// import PropTypes from 'prop-types'

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

  @media screen and (max-width: 900px) {
    background-image: none;
    padding: 10px;
  }

  img {
    width: 30px;
    height: 30px;
  }

  width: 100%;
  box-sizing: border-box;

  padding: 10px 8% 10px 57%;
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
  
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`
const Item = styled.div`
  width: 50%;

  
  @media screen and (max-width: 900px) {
    width: 100%;
  }

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
    flex: 1;
  }

  padding: 5px 5px 5px 0;
  box-sizing: border-box;

  input,
  textarea {
    border: 1px solid gray;
    background-color: transparent;
    resize: none;
    height: 30px;
    padding: 0 5px;
    font-family: 'Open Sans', sans-serif;
  }

  textarea {
    height: 200px;
  }
`

const Form = styled.form`
  > div {
    display: flex;
    flex-wrap: wrap;
    position: relative;

    &:before {
      content: 'Message sent!';
      position: absolute;
      width: 100%;
      height: ${props => props.sent ? 'calc(100% + 50px)' : '0%'};

      display: flex;
      align-items: center;
      justify-content: center;

      transition: 0.4s all;

      font-size: ${props => props.sent ? '40px' : '0'};
      font-weight: 100px;

      background-color: #EEEEEE;
    }
  }
`

const ContactButton = Button.extend`
  margin-left: auto;
  margin-right: 5px;
`

const IFrame = styled.iframe`
  border: 0;
  width: 0;
  height: 0;
`

class Main extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sent: false
    }
  }

  submit = _ => this.setState({...this.state, sent: true})

  render () {
    return (
      <Container id='contact'>
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
        <Form method="POST" 
          target="frame"
        action="https://docs.google.com/forms/d/e/1FAIpQLSftWsMaSxd0griW5p622okTaUGOFsHguJmGj6L8B2aFxd0Psg/formResponse" onSubmit={this.submit}
        sent={this.state.sent}>
          <div>
            <Input>
              <label> Name </label>
              <input required name="entry.649128642" type='text' />
            </Input>
            <Input>
              <label> E-mail </label>
              <input required name="entry.2134513646" type='email' />
            </Input>
            <Input>
              <label> Message </label>
              <textarea required name="entry.861169742"/>
            </Input>
          </div>
            <ContactButton> Send </ContactButton>
        </Form>
        <IFrame name="frame" />
      </Container>
    )
  }
}

Main.propTypes = propTypes

export default Main
