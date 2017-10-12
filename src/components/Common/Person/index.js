/**
 * Person component
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Container from './components/Container'
import Modal from './components/Modal'

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

  get modal () {
    let {modalOpen} = this.state
    let {data} = this.props
    let {teaching} = data

    if (this.props.noModal || teaching === undefined) {
      return null
    } else {
      return <Modal modalOpen={modalOpen}
        toggleModal={this.toggleModal} 
        data={data} />
    }
  }

  render () {
    let {data} = this.props

    return (
      <div onClick={this.toggleModal}>
        <Container data={data} />
        {this.modal}
      </div>
    )
  }
}

Person.propTypes = propTypes
Person.defaultProps = defaultProps

export default Person
