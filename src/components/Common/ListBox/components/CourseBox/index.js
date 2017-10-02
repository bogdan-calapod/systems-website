/**
 * Course box display
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import Button from 'components/Common/Button'

import HitListModal from '../HitListModal'

const propTypes = {
  data: PropTypes.object
}

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;

  max-width: ${props => props.main ? '500px' : 'none'};
  background-color: white;
  margin: 10px 0;
`

const Logo = styled.img`
  width: 150px;
  margin: 10px;
`

const Title = styled.h1`
  margin: 0;
  font-size: 21px;
`

const Para = styled.p`
  font-size: 14px;
  margin: 0;
`

class CourseBox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      modalOpen: false
    }
  }

  toggleModal = _ => {
    console.log('hola')
    this.setState({modalOpen: !this.state.modalOpen})
  }

  getButtons () {
    let buttons = []

    if (this.props.data.presentation) {
      buttons.push(
        <a href={this.props.data.presentation} key={0}>
          <Button>
            Course presentation
          </Button>
        </a>)
    }

    if (true || this.props.data.hitList) {
      buttons.push(
        <div onClick={this.toggleModal}>
          <Button key={1}>
            Student Hit List
          </Button>
        </div>
      )
    }

    return buttons
  }

  render () {
    let {name, description} = this.props.data
    let {modalOpen} = this.state

    return (
      <Column main>
        <Row>
          <Logo src='http://systems.bogdancalapod.com/img/courses/uso.svg' alt='' />
          <Column>
            <Title>{name}</Title>
            <Para>{description}</Para>
          </Column>
        </Row>
        <Row>
          {this.getButtons()}
        </Row>
        <HitListModal visible={modalOpen} onClose={this.toggleModal} />
      </Column>
    )
  }
}

CourseBox.propTypes = propTypes

export default CourseBox