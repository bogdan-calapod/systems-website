/**
 * Header component
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Menu from './components/Menu'
import Title from './components/Title'
import bg from './img/acorn-background.jpg'

import Modal from '../Announcements/Modal'

const propTypes = {
  small: PropTypes.bool,
  data: PropTypes.object
}

const defaultProps = {
  small: false,
  data: [
    {
      "title": "SCSS Announement",
      "text": "The Student Scientific Projects Session, section Software Systems and Network Services will take place on May 11th, from 9:00, in EG302 and EG202. \n\n The students need to write a scientific paper of 4-6 pages and give a presentation of 5 minutes.",
      "linkname": "Register Here",
      "link": "https://docs.google.com/forms/d/e/1FAIpQLScWctkdKI8PtcPDfQ6UYtPa9oyt1SyyXVqIggfoBoWpFTq7Wg/viewform"
    },
  ]
}

// Component styles
const Container = styled.div`
  height: ${props => props.small ? '80px' : '95vh'};
  background-image: url(${bg});
  background-size: cover;
  background-position: 80% 90%;
`
class Header extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      modalOpen: false,
    }
  }

  toggleModal = _ => {
    this.setState({...this.state, modalOpen: !this.state.modalOpen})
  }

  get modal(){
    let {modalOpen} = this.state
    let {data} = this.props

    if(data === undefined){
      return null;
    } else{
      return <Modal modalOpen={modalOpen} 
        toggleModal={this.toggleModal} 
        data={data} />
    }
  }

  render () {
    return (
      <Container {...this.props}>
        <Menu {...this.props} toggleModal={this.toggleModal}/>
        <Title {...this.props} />

        {this.modal}

      </Container>
    )
  }
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
