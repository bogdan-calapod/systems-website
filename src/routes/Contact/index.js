/**
 * People Routing Component
 */

import React, { Component } from "react";

import Header from "components/Common/Header";
import Contact from "components/Contact";

class PeopleRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header small />
        <Contact />
      </div>
    );
  }
}

export default PeopleRoute;
