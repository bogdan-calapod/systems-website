/**
 * Project component
 */

import React, { Component } from 'react'
import styled from 'styled-components'

import Button from 'components/Common/Button'

import Modal from 'rodal'

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;

  padding: 0 5px;

  
  @media screen and (max-width: 900px) {
    flex-direction: column;
    text-align: center;

    h2,
    p,
    button {
      margin: 5px;
    }
  }

  > * {
    flex: 1;
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
    min-width: 200px;
  }

  &:nth-child(odd) {
    background-color: white;
  }

  > div:not(.rodal) {
    max-width: 150px;

    button {
      width: 120px;
      margin: 10px;
    }
  }
`

const IFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`

class Project extends Component {
  constructor (props) {
    super(props)

    this.state = {
      modalOpen: false
    }
  }

  toggleModal = _ => {
    this.setState({...this.state, modalOpen: !this.state.modalOpen})
  }

  get url () {
    let {url} = this.props.data
    let template = 'https://docs.google.com/viewer?srcid=%%ID%%&pid=explorer&efh=false&a=v&chrome=false&embedded=true'

    let id

    // Determine sheet id
    if (url.includes('/d/')) {
      id = url.split('/d/')[1].split('/')[0]
    } else if (url.includes('id=')) {
      id = url.split('id=')[1]
    }

    return template.replace('%%ID%%', id)
  }

  get iframe () {
    if (this.state.modalOpen) {
      return <IFrame src={this.url} title='doc' />
    } else {
      return null
    }
  }

  render () {
    let {name, teachers} = this.props.data
    let {modalOpen} = this.state

    return (
      <Container>
        <h2>{name}</h2>
        <p>{teachers}</p>
        <div onClick={this.toggleModal}>
          <Button> Details </Button>
        </div>
        <Modal visible={modalOpen}
          onClose={this.toggleModal} 
          width={600}
          height={600}>
          {this.iframe}
        </Modal>
      </Container>
    )
  }
}

export default Project
