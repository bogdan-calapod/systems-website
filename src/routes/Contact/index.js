/**
 * People Routing Component
 */

import React, { Component } from "react";

import Header from "components/Common/Header";
import Contact from "components/Contact";

import request from "axios";

class PeopleRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    request
      .get(`${process.env.PUBLIC_URL}/api/notifications.json`)
      .then((x) => this.setState({ ...this.state, notifications: x.data }));
  }

  render() {
    return (
      <div>
        <Header small data={this.state.notifications} />
        <Contact />
      </div>
    );
  }
}

export default PeopleRoute;
