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

import AsyncComponent from './AsyncComponent'

let theme = {
  primary: '#F7931E'
}

const Home = AsyncComponent(_ => import('routes/Home'))
const People = AsyncComponent(_ => import('routes/People'))

class MainRouter extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/people' component={People} />
          </Switch>
        </Router>
      </ThemeProvider>
    )
  }
}

export default MainRouter
