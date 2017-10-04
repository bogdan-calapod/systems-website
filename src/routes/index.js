/**
 * Main routes index component
 */

import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import Home from 'routes/Home'
import People from 'routes/People'
import Bachelor from 'routes/Bachelor'
import Master from 'routes/Master'

let theme = {
  primary: '#F7931E'
}

class MainRouter extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/dev/' component={Home} />
            <Route exact path='/people' component={People} />
            <Route exact path='/bachelor' component={Bachelor} />
            <Route exact path='/master' component={Master} />
          </Switch>
        </Router>
      </ThemeProvider>
    )
  }
}

export default MainRouter
