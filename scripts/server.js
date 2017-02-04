/**
 * Bogdan Calapod | Tech Lounge | 04 Feb 2017
 *
 * Watch server
 *
 * Starts a new server and triggers a rebuild
 * and a reload every time a watched file is modified
 */

// Server modules
let express = require('express')
let reload = require('reload')
let watcher = require('watchr')
let opn = require('opn')

// OS Modules
let http = require('http')

module.exports = {
  /**
   * Starts an express server
   * that servers a static folder
   *
   * @param {object} options - Server options
   * @property {number} [port=8080] - Port to run the server on
   * @property {string} serve - Folder to serve files from
   *
   * @returns {object} server - The http server and express app object
   * @property {object} app - The Express server instance
   * @property {object} server - The HTTP server instance
   */
  startServer: (options) => {
    let {serve, port} = options

    // Configure default port
    port = port || 8080

    // Express server init and config
    let app = express()
    app.set('port', port)
    app.use(express.static(serve))

    let server = http.createServer(app)

    // Start server
    server.listen(app.get('port'), () => console.log('Server started on ', app.get('port')))

    // Open web page
    opn('http://localhost:' + app.get('port'))

    // Return the server and app objects
    return {app, server}
  },

  /**
   * Triggers a server reload
   *
   * @param {object} app - The ExpressJS app instance
   * @param {object} server - The HTTP server instance
   */
  reloadServer (app, server) {
    reload(app, server)
  }
}
