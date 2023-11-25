/**
 * Container component for person
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Social from "../Social";
import ProfileImage from "../"

const propTypes = {
  data: PropTypes.object,
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  cursor: pointer;

  width: 450px;

  @media screen and (max-width: 900px) {
    width: 300px;
    flex-wrap: nowrap;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;

  h1,
  h2 {
    margin: 0;
    font-size: 30px;
    max-width: 250px;
  }

  h2 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 14px;
  }
`;


class PersonContainer extends Component {
  render() {
    let { name, position } = this.props.data;

    return (
        <Container>
          <ProfileImage name={name} />
          <Text>
            <h1>{name}</h1>
            <h2>{position}</h2>
            <Social data={this.props.data} />
          </Text>
        </Container>
    );
  }
}

PersonContainer.propTypes = propTypes;

export default PersonContainer;
