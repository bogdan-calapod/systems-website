/**
 * Sheets module for Website Generator
 */

let Drive = require('./sheets/drive.js');
let Spreadsheet = require('./sheets/spreadsheet.js');
let apiAuth = require('./sheets/apiAuth');
let fs = require('fs-extra');

module.exports = class Sheets {
  constructor(config = {}) {
    // Connect to Google API
    let googleApi = apiAuth.connect(
      './credentials/google-jwt.json',
      [
        'https://www.googleapis.com/auth/drive', 
        'https://www.googleapis.com/auth/spreadsheets'
      ]
    );
    
    this.config = config;
    this.drive = new Drive(googleApi);
    this.sheets = new Spreadsheet(googleApi);
  }

  /**
   * Helper function that downloads spreadsheets synchronously
   * and writes them to the file defined in config
   * @private
   */
  _getSheets(sheetList = []) {
    // Return if sheetList is empty
    if(sheetList.length == 0) {
      console.log('Sheet array is empty, returning');
      return;
    }
    
    // Prepare sheet data object
    let data = {};
    
    // Every 5 seconds, process a spreadsheet
    let interval = setInterval(
      () => {
        if(sheetList.length == 0) {
          this._writeFile(data);
          clearInterval(interval);
          return;
        }
        
        let current = sheetList.pop();
        
        this.sheets.getJSON(
          current.id,
          json => data[current.name] = json.values
        )
      },
      5000
    );
  }

  /**
   * Writes sheets file in the specified location
   * @param data
   * @private
   */
  _writeFile(data) {
    console.log('Writing spreadsheet file...');
    let path = this.config.filesLocation + this.config.spreadsheetsName;
    
    try {
      fs.writeJson(path, data);
    } catch (e) {
      console.error('Error while writing spreadsheet file: ', e);
      process.exit();
    }
  }

  /**
   * Downloads the spreadsheets and saves them as a JSON
   * file in the path specified in config
   */
  download() {
    console.log('Downloading spreadsheets...');
    
    this.drive.list(
      '\'' + this.config.folderID + '\' in parents'
    ).then(
      files => files.filter(x => x.mimeType.indexOf('sheet') > -1)      
    ).then(
      this._getSheets.bind(this)
    );
    
  }
}