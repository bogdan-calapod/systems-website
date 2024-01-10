/**
 * Home Routing Component
 */

import React, { Component } from "react";

import Header from "components/Common/Header"
import Container from "components/Master";

import request from "axios";

class Master extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      courses: [],
    };
  }

  componentWillMount() {
    request.get(`${process.env.PUBLIC_URL}/api/projects.json`).then((x) =>
      this.setState({
        ...this.state,
        projects: x.data.filter((x) => x.type === "master"),
      }),
    );

    request.get(`${process.env.PUBLIC_URL}/api/courses.json`).then((x) =>
      this.setState({
        ...this.state,
        courses: x.data.filter((x) => x.type === "master"),
      }),
    );

    request
      .get(`${process.env.PUBLIC_URL}/api/people.json`)
      .then((x) => this.setState({ ...this.state, people: x.data }));

    request
      .get(`${process.env.PUBLIC_URL}/api/notifications.json`)
      .then((x) => this.setState({ ...this.state, notifications: x.data }));

    // request
    //   .get("/api/collaborators.json")
    //   .then((x) =>
    //     this.setState({
    //       ...this.state,
    //       date: x.data[0].masterDate,
    //       url: x.data[0].masterURL,
    //     }),
    //   );
  }

  render() {
    return (
      <div>
        <Header small data={this.state.notifications} />
        <Container
          projects={this.state.projects}
          courses={this.state.courses}
          date={this.state.date}
          url={this.state.url}
          people={this.state.people}
        />
      </div>
    );
  }
}

export default Master;
