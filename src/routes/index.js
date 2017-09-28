/**
 * Main routes index component
 */

import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import AsyncComponent from './AsyncComponent'

let theme = {
  primary: '#F7931E'
}

const Home = AsyncComponent(_ => import('routes/Home'))

class MainRouter extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Route exact path='/' component={Home} />
        </Router>
      </ThemeProvider>
    )
  }
}

export default MainRouter
