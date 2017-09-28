/**
 * Person modal component
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'

const propTypes = {
  modalOpen: PropTypes.bool,
  toggleModal: PropTypes.func
}

const defaultProps = {
  modalOpen: false,
  toggleModal: _ => {}
}

class Modal extends Component {
  render () {
    let { modalOpen, toggleModal } = this.props

    return (
      <Rodal visible={modalOpen} onClose={toggleModal}>
        <h2> Hello </h2>
      </Rodal>
    )
  }
}

Modal.propTypes = propTypes
Modal.defaultProps = defaultProps

export default Modal
