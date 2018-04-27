/**
 * About container
 */

import React, { Component } from 'react'

import SectionTitle from 'components/Common/SectionTitle'
import Button from 'components/Common/Button'

import Icons from 'components/Common/Header/components/Title/Icons'

import styled from 'styled-components'
import bg from './bg.jpg'

const Container = styled.div`
  background-color: #f8f8f8;
  background-image: url(${bg});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: right;
  padding-bottom: 20px;

  @media screen and (max-width: 900px) {
    background-image: none;
  }
`

const SplitContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 100px;

  @media screen and (max-width: 900px) {
    width: 100%;
    margin: 0;
    padding: 10px;

    box-sizing: border-box;
  }
`

const Para = styled.p`
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
`

class About extends Component {
  render () {
    return (
      <Container>
        <h2> SCSS Announement </h2>
        <p>
          The Student Scientific Projects Session, section Software Systems and
          Network Services will take place on May 11th, from 9:00, in EG302 and EG202.
        </p>
        <p>
          The students need to write a scientific paper of 4-6 pages and give a
          presentation of 5 minutes.
        </p>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLScWctkdKI8PtcPDfQ6UYtPa9oyt1SyyXVqIggfoBoWpFTq7Wg/viewform'>
          <Button> Register here </Button>
        </a>

        <SectionTitle> About </SectionTitle>
        <SplitContainer>
          <Para>
            We share with students the thrill of exploring today’s information architectures, and we learn through teaching. Our courses start from the nuts and bolts of Operating Systems, to flows and risks in computer networks, to extended capacities through mobile platforms, the smart environment of the Internet of Things, and distributed collaboration in peer to peer networks.
          </Para>
          <Para italic>
            “We can't impose our will on a system. We can listen to what the system tells us, and discover how its properties and our values can work together to bring forth something much better than could ever be produced by our will alone.” (Donella H. Meadows)
          </Para>
          <Icons large />
        </SplitContainer>
      </Container>
    )
  }
}

export default About
