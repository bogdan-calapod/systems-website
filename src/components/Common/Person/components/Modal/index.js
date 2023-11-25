/**
 * Person modal component
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import styled from "styled-components";

import SectionTitle from "components/Common/SectionTitle";
import Social from "../Social";
import ProfileImage from "../"

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
  display: flex;
  align-items: flex-start;
  overflow: auto;
  height: 80%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: 60%;
  }
`;

const Section = styled.div`
  display: flex;
  flex: ${(props) => (props.full ? "1" : "none")};
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  &:first-child {
    margin-right: 10px;
  }

  > img {
    width: 150px;
    height: 150px;
    border-radius: 30px;
    object-fit: cover;
  }

  h2 {
    font-size: 18px;
    margin-top: 20px;
  }
`;

const ListTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 18px;
  border-bottom: 1px solid gray;
  width: 100%;
`;

const List = styled.ul`
  margin: 10px 0;
`;

class Modal extends Component {
  getSize() {
    if (window.innerWidth < 900) {
      return { width: 280, height: 450 };
    } else {
      return { width: 850, height: 550 };
    }
  }

  getList(title, data) {
    if (data.length === 0) {
      return null;
    }

    let content = data.map((x, i) => <li key={i}>{x}</li>);

    return [
      <ListTitle key={0}>{title}</ListTitle>,
      <List key={1}>{content}</List>,
    ];
  }

  render() {
    let { modalOpen, toggleModal } = this.props;
    let { name, position, description, teaching } = this.props.data;
    let { paper1, paper2, paper3, paper4, paper5 } = this.props.data;

    let papers = [paper1, paper2, paper3, paper4, paper5].filter(
      (x) => x && x !== "",
    );

    return (
      <Rodal visible={modalOpen} onClose={toggleModal} {...this.getSize()}>
        <SectionTitle left> {name} </SectionTitle>
        <Split>
          <Section>
            <ProfileImage name={name} />
            <h2> {position} </h2>
            <Social data={this.props.data} />
          </Section>
          <Section full>
            <p> {description} </p>
            {this.getList("Teaching", teaching.split(","))}
            {this.getList("Top Papers", papers)}
          </Section>
        </Split>
      </Rodal>
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
