/**
 * Files manager for Website Generator
 *
 * Interacts with the Google Drive executable and downloads files to
 * a specified location, passed through the `config` object in the
 * constructor
 */

let fs = require('fs-extra')
let path = require('path')
let Utility = require('./Utility.js')

module.exports = class Files {
  constructor (config = {}) {
    this.config = config
  }

  /**
   * Runs the download script and saves the Google Drive folder to the
   * location specified in config
   *
   * @param env - object from Util which defines our environment
   */
  download (env) {
    console.log('Starting file download...')

    // Ensuring that the folder is empty
    // fs.emptyDirSync(this.config.filesLocation);

    this._checkForCredentials(env.platform)

    // Get script that we need to run
    let script = path.join(__dirname, this.config.scripts.drive[env.platform])
    let location = this.config.filesLocation
    let id = this.config.folderID

    // If we are on Windows, we need to enquote the script path
    if (env.platform === 'windows') {
      script = '"' + script + '"'
    }

    // Compile the command
    let command = script + ' download -r -f --path ' + location + ' ' + id

    // Execute download command
    Utility.exec(command)

    // Move files from folder to /files
    let downloadedFolder, downloadedFiles
    try {
      downloadedFolder = fs.readdirSync(this.config.filesLocation).filter(x => x.indexOf('.json') < 0)[0]
      downloadedFiles = fs.readdirSync(this.config.filesLocation + '/' + downloadedFolder)
    } catch (e) {
      console.log('Error moving files: ', e)
      return
    }

    downloadedFiles.map(
      x => fs.copySync(
        this.config.filesLocation + downloadedFolder + '/' + x,
        this.config.filesLocation + x,
        {limit: 5}
      )
    )

    fs.removeSync(this.config.filesLocation + downloadedFolder)
  }

  /**
   * Checks for credentials for the Google Drive script, and installs a cached one
   * if available.
   *
   * @param platform - platform on which we run: windows | linux
   * @private
   */
  _checkForCredentials (platform) {
    console.log('Checking for credentials...')

    let path = platform === 'windows'
      ? process.env.APPDATA + '/.gdrive/token_v2.json'
      : '~/.gdrive/token_v2.json'

    // Check if credentials file exists. If not, check if we have a local one
    // configured and copy it. If that doesn't exist either, exit with error.
    try {
      fs.accessSync(path, fs.F_OK)
    } catch (e) {
      if (!this.config.driveCredentials) {
        console.error('No credentials found. Run script manually and retry.')
        process.exit()
      }

      console.log('Credentials not found, using ones from cache...')

      try {
        fs.copySync(this.config.driveCredentials, path)
      } catch (e) {
        console.log('Error while copying credentials', e)
        process.exit()
      }
    }
  }
}
