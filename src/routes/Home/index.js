/**
 * Home Routing Component
 */

import React, { Component } from "react";

import Header from "components/Common/Header";
import About from "components/About";
import People from "components/People";
import Contact from "components/Contact";

import request from "axios";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      notifications: [],
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
        <Header data={this.state.notifications}/>
        <About />
        <People data={this.state.people} />
        <Contact />
      </div>
    );
  }
}

export default Home;
