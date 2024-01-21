/**
 * Course box display
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import Button from "components/Common/Button";

import HitListModal from "../HitListModal";

const propTypes = {
  data: PropTypes.object,
};

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${(props) => (props.left ? "flex-start" : "space-between")};

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  div,
  button {
    margin: 0;
  }

  button {
    margin: 0 10px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  max-width: ${(props) => (props.main ? "500px" : "none")};
  background-color: white;
  margin: 10px 0;
`;

const Logo = styled.img`
  max-width: none;
  max-height: none;
  width: 150px;
  margin: 10px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 21px;
`;

const Para = styled.p`
  font-size: 14px;
  margin: 0;
`;

class CourseBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };
  }

  componentDidMount() {
    let cleanedName = "/" + this.props.data.abbreviation.toLowerCase();

    console.log(cleanedName);

    if (window.location.href.toLowerCase().includes(cleanedName)) {
      this.setState({ ...this.state, modalOpen: true });
    }
  }

  toggleModal = (_) => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  getButtons() {
    let buttons = [];

    if (this.props.data.presentation) {
      buttons.push(
        <a href={this.props.data.presentation} key={0}>
          <Button>Course</Button>
        </a>,
      );
    }

    if (this.props.hitlists && this.props.hitlists.length > 0) {
      buttons.push(
        <div onClick={this.toggleModal}>
          <Button key={1}>Best students</Button>
        </div>,
      );
    }

    return buttons;
  }

  render() {
    // console.log(this.props.data.abbreviation);
    // console.log("Hitlists: " +  JSON.stringify(this.props.hitlists));
    // console.log("Hitlist Announcements: " + JSON.stringify(this.props.hitlist_announcements));

    let { name, description, abbreviation} = this.props.data;
    let { hitlists, hitlist_announcements } = this.props;
    let { modalOpen } = this.state;

    return (
      <Column main>
        <Row left>
          <Logo
            src={
              `${process.env.PUBLIC_URL}/courses/` +
              abbreviation.toLowerCase() +
              ".svg"
            }
            alt=""
          />
          <Column>
            <Title>{name}</Title>
            <Para>{description}</Para>
          </Column>
        </Row>
        <Row>{this.getButtons()}</Row>
        <Hitlist
          visible={modalOpen}
          toggleModal={this.toggleModal}
          abbreviation={abbreviation}
          hitlists={hitlists}
          hitlist_announcements={hitlist_announcements}
        />
      </Column>
    );
  }
}

function Hitlist({visible, toggleModal, abbreviation, hitlists, hitlist_announcements}){
  if(hitlists === undefined)
    return <div />;

  return <HitListModal
    visible={visible}
    onClose={toggleModal}
    abbreviation={abbreviation}
    data={ {hitlists, hitlist_announcements} }
  />
}

CourseBox.propTypes = propTypes;

export default CourseBox;
