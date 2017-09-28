import React from 'react'
import './index.css'
import App from './routes'
import registerServiceWorker from './registerServiceWorker'
import { render } from 'react-snapshot'

render(<App />, document.getElementById('root'))
registerServiceWorker()

if (module.hot) {
  module.hot.accept('./routes', _ => {
    const NextApp = require('./routes').default
    render(<NextApp />, document.getElementById('root'))
  })
}
