/**
 * Main routes index component
 */

import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import Home from "routes/Home";
import People from "routes/People";
import Bachelor from "routes/Bachelor";
import Master from "routes/Master";
import PhD from "routes/PhD";

let theme = {
  primary: "#F7931E",
};

class MainRouter extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/people" component={People} />
            <Route path="/bachelor" component={Bachelor} />
            <Route path="/master" component={Master} />
            <Route path="/phd" component={PhD} />
            <Route component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default MainRouter;
