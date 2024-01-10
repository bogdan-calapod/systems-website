/**
 * Home Routing Component
 */

import React, { Component } from "react";

import Header from 'components/Common/Header'
import Container from "components/PhD";

import request from "axios";

class PhD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  componentWillMount() {
    request
      .get(`${process.env.PUBLIC_URL}/api/phd_projects.json`)
      .then((x) => this.setState({ ...this.state, projects: x.data }));

    request
      .get(`${process.env.PUBLIC_URL}/api/notifications.json`)
      .then((x) => this.setState({ ...this.state, notifications: x.data }));
  }

  render() {
    return <div>
      <Header small data={this.state.notifications} />
      <Container projects={this.state.projects} />;
    </div>
  }
}

export default PhD;
