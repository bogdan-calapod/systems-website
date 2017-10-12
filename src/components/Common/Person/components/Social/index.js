/**
 * Social contacts component
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import mail from './mail.svg'
import lin from './in.svg'
import fb from './fb.svg'

const propTypes = {
  data: PropTypes.object
}

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

class SocialComponent extends Component {
  getSocial () {
    let {email, facebook, linkedin} = this.props.data
    let social = []

    if (email && email.trim() !== '') {
      social.push(<a href={'mailto:' + email} key={0}>
        <img src={mail} alt='' />
      </a>)
    }

    if (linkedin && linkedin.trim() !== '') {
      social.push(<a href={linkedin} target='_blank' rel='noreferrer' key={1}>
        <img src={lin} alt='' />
      </a>)
    }

    if (facebook && facebook.trim() !== '') {
      social.push(<a href={facebook} target='_blank' rel='noreferrer' key={2}>
        <img src={fb} alt='' />
      </a>)
    }

    return social
  }

  render () {
    return (
      <Social>
        {this.getSocial()}
      </Social>
    )
  }
}

SocialComponent.propTypes = propTypes

export default SocialComponent
