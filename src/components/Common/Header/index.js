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
      "title": "No Announcements",
      "text": "There are no current Announcements. Please check back later!",
      "linkname": "",
      "link": ""
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

  componentDidMount(){
    console.log(window.location.href)
    // if(window.location.href === "http://localhost:3000/" || window.location.href === "https://systems.cs.pub.ro/")
    //   this.setState({...this.state, modalOpen: true})
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
