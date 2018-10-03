/**
 * Home Routing Component
 */

import React, { Component } from "react";

import Container from "components/Bachelor";

import request from "axios";

class Bachelor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      courses: [],
      people: []
    };
  }

  async componentDidMount() {
    let projects, courses, people, collaborators, date, url;

    try {
      projects = await request.get("/api/projects/");
      courses = await request.get("/api/courses/");
      people = await request.get("/api/people/");
      collaborators = await request.get("/api/collaborators/");

      date = collaborators.data[0].bachelorDate;
      url = collaborators.data[0].bachelorURL;
    } catch (e) {
      console.warn("Error making requests");
      return;
    }

    this.setState({
      projects: projects.data.filter(x => x.type === "bachelor"),
      courses: courses.data.filter(x => x.type === "bachelor"),
      people: people.data,
      date,
      url
    });
  }

  render() {
    return (
      <Container
        projects={this.state.projects}
        courses={this.state.courses}
        date={this.state.date}
        url={this.state.url}
        people={this.state.people}
      />
    );
  }
}

export default Bachelor;
