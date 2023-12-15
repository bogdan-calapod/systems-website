/**
 * Notification modal component
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import styled from "styled-components";

import NotificationDisplay from "../index.js"

const propTypes = {
  modalOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  data: PropTypes.object,
};

const defaultProps = {
  modalOpen: false,
  toggleModal: (_) => {},
};

const Split = styled.div`
  overflow: auto;
  margin: auto;
  height: 95%;
  width: 95%;
`;


class Modal extends Component {
  getSize() {
    if (window.innerWidth < 900) {
      return { width: 280, height: 450 };
    } else {
      return { width: 850, height: 550 };
    }
  }

  get notifications () {
    let convert = arr => arr.map(
      (x, i) => <NotificationDisplay props={x} />
    )

    return [
      convert(this.props.data)
    ]
  }

  render() {
    let { modalOpen, toggleModal, data } = this.props;

    if(!Array.isArray(data) || data.length === 0){
      return null;
    } else{
      return (
        <Rodal visible={modalOpen} onClose={toggleModal} {...this.getSize()}>
          <Split>
          {this.notifications}
          </Split>
        </Rodal>
      );
    }
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
