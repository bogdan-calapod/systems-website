/**
 * Person component
 */

import React, { Component } from 'react'

import Container from './components/Container'
import Modal from './components/Modal'

class Person extends Component {
  constructor (props) {
    super(props)

    this.state = {
      modalOpen: false
    }
  }

  toggleModal = _ => {
    this.setState({...this.state, modalOpen: !this.state.modalOpen})
  }

  render () {
    let {modalOpen} = this.state

    return (
      <div onClick={this.toggleModal}>
        <Container />
        <Modal modalOpen={modalOpen} toggleModal={this.toggleModal} />
      </div>
    )
  }
}

export default Person
