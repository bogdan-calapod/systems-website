/**
 * Bachelor page presentational component
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "components/Common/Header";
import People from "components/People";
import SectionTitle from "components/Common/SectionTitle";
import ListBox from "components/Common/ListBox";
import Button from "components/Common/Button";

import sric from "./sric.svg";
import styled from "styled-components";

const propTypes = {
  projects: PropTypes.array,
  courses: PropTypes.array,
  people: PropTypes.array
};

const defaultProps = {
  projects: [],
  courses: [],
  people: []
};

const Container = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;

  > p {
    max-width: 800px;
    margin: 10px auto;
    display: block;
    text-align: center;
  }

  a {
    display: flex;
    align-items: center;
    max-width: 400px;
    color: currentColor;

    img {
      height: 50px;
    }
  }
`;

const Lists = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  p {
    max-width: 400px;
  }
`;

class Master extends Component {
  render() {
    let { projects, courses, people } = this.props;

    return (
      <div>
        <Header small />
        <Container>
          <SectionTitle> Master </SectionTitle>
          <p>
            <a
              href="http://sric.cs.pub.ro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={sric} alt="" />
              Be sure to check out our Master program at sric.cs.pub.ro!
            </a>
          </p>
          <p>
            Delve in-depth in the upcoming information infrastructures, and
            learn to tame the wildest networks. Prepare to confront attacks with
            dedicated techniques and equipment. Get a better grip on mobile
            systems, and secure the biggest and the smallest devices. Find your
            path in the research community of applied and fundamental ICT
            scholars, and join dedicated mentors and instructors in R&D projects
            of your choice.
          </p>
          <Lists>
            <ListBox title="Courses" type="course" data={courses} />
            <ListBox title="Projects" type="project" data={projects} showFilter>
              Research projects should be registered until November 1st.
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSePOIhrt_A06ZOyNX0xnT_2_v0JGdPFiCn6wOWn3XHng-zUGQ/viewform">
                <Button>Register your presentation here</Button>
              </a>
              <p>All research reports should be sumbited by Februrary 4th.</p>
              <p>Research report defence will take place: </p>
              <ul>
                <li>SAS1: Februrary 6th, 9:00, PR705</li>
                <li>SAS2: Februrary 7th, 9:00, PR705</li>
                <li>SRIC1: Februrary 6th, 9:00, PR706 </li>
                <li>SRIC2: Februrary 7th, 9:00, PR706</li>
              </ul>
            </ListBox>
          </Lists>
        </Container>
        <People data={people} />
      </div>
    );
  }
}

Master.propTypes = propTypes;
Master.defaultProps = defaultProps;

export default Master;
