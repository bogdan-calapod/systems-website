/**
 * People Routing Component
 */

import React, { Component } from "react";

import Header from "components/Common/Header";
import People from "components/People";

import request from "axios";

class PeopleRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }

  componentWillMount() {
    request
      .get(`${process.env.PUBLIC_URL}/api/people.json`)
      .then((x) => this.setState({ ...this.state, people: x.data }));

    request
      .get(`${process.env.PUBLIC_URL}/api/notifications.json`)
      .then((x) => this.setState({ ...this.state, notifications: x.data }));
  }

  render() {
    return (
      <div>
        <Header small  data={this.state.notifications} />
        <People data={this.state.people} />
      </div>
    );
  }
}

export default PeopleRoute;
