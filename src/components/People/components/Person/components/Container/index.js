/**
 * Container component for person
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import mail from '../mail.svg'
import lin from '../in.svg'
import fb from '../fb.svg'

const propTypes = {
  data: PropTypes.object
}

const defaultProps = {
  data: {
    name: 'Ion Popescu',
    position: 'Assistant Manager',
    description: 'Nisi consectetur est dolor nostrud ut qui non amet.',
    photo: 'http://d.ibtimes.co.uk/en/full/1356835/number-2-u-s-president-barack-obama-second-most-admired-person-planet.jpg?w=500&h=583&l=63&t=38',
    email: 'ion@popescu.com',
    facebook: 'http://www.facebook.com',
    linkedin: 'http://www.linkedin.com',
    teaching: 'USO, RL, SO',
    paper1: 'Scaling P2P Testing swarms',
    paper2: 'Scaling P2P Testing swarms',
    paper3: 'Scaling P2P Testing swarms'
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  cursor: pointer;

  > img {
    width: 120px;
    height: 120px;
    border-radius: 30px;
    object-fit: cover;
    margin-right: 10px;
    transition: 0.4s box-shadow;
  }

  &:hover > img {
    box-shadow: 0 5px 15px rgba(0,0,0, 0.5)
  }
`

const Text = styled.div`
  display: flex;
  flex-direction: column;

  h1,
  h2 {
    margin: 0;
    font-size: 30px;
  }

  h2 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 16px;
  }
`

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100px;
  margin: 10px 0;

  img {
    width: 25px;
    height: 25px;
    transition: 0.4s transform;

    &:hover {
      transform: scale(1.2);
    }
  }
`

class PersonContainer extends Component {
  getSocial () {
    let {email, facebook, linkedin} = this.props.data
    let social = []

    if (email && email !== '') {
      social.push(<a href={'mailto:' + email} key={0}>
        <img src={mail} alt='' />
      </a>)
    }

    if (linkedin && linkedin !== '') {
      social.push(<a href={linkedin} target='_blank' rel='noreferrer' key={1}>
        <img src={lin} alt='' />
      </a>)
    }

    if (facebook && facebook !== '') {
      social.push(<a href={facebook} target='_blank' rel='noreferrer' key={2}>
        <img src={fb} alt='' />
      </a>)
    }

    return social
  }

  render () {
    let {photo, name, position} = this.props.data

    return (
      <Container>
        <img alt={name} src={photo} />
        <Text>
          <h1>{name}</h1>
          <h2>{position}</h2>
          <Social>
            {this.getSocial()}
          </Social>
        </Text>
      </Container>
    )
  }
}

PersonContainer.propTypes = propTypes
PersonContainer.defaultProps = defaultProps

export default PersonContainer
