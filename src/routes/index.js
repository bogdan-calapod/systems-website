/**
 * Main routes index component
 */

import React, { Component } from "react";

import { HashRouter, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import Home from "routes/Home";
import People from "routes/People";
import Bachelor from "routes/Bachelor";
import Master from "routes/Master";
import PhD from "routes/PhD";
import Contact from "routes/Contact";

let theme = {
  primary: "#eeeeee",
};

class MainRouter extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Switch>
            <Route path="/people" component={People} />
            <Route path="/bachelor" component={Bachelor} />
            <Route path="/master" component={Master} />
            <Route path="/phd" component={PhD} />
            <Route path="/contact" component={Contact} />
            <Route component={Home} />
          </Switch>
        </HashRouter>
      </ThemeProvider>
    );
  }
}

export default MainRouter;
