/**
 * Entry point
 * -----------
 * 
 * This is the entry point of the application. Depending on parameters,
 * it runs certain operations and then regenerates the website
 * 
 * * `--all` : (optional) Run all steps
 * * `--download-files': Downloads Google Drive files
 * * `--download-sheets`: Download Google Drive spreadsheets as JSON
 * * `--rebuild-website`: Runs only the website rebuild script
 * 
 * If the `--no-rebuild` parameter is passed, the script will skip the 
 * website rebuild parameter
 */

// Import modules
let fs = require('fs');
let Utility = require('./Utility.js');
let Files = require('./Files.js');
let Sheets = require('./Sheets.js');

console.log('Reading configuration file');
let config = require('./config/config.json');

// Process arguments and get environment
let env = Utility.processArguments(process);

// Initialize files processor 
let files = new Files(config);
let sheets = new Sheets(config); 

console.log(process.env.APPDATA);

// Execute requested operation
switch(env.operation) {
  case '--download-files': 
    files.download(env);
    break;
  
  case '--download-sheets':
    sheets.download(env);
    break;
  
  case '--rebuild-website':
    Utility.rebuildWebsite(config.scripts.generate, env);
    break;
  
  case '--all':
    files.download(env);
    sheets.download(env);
    Utility.rebuildWebsite(config.scripts.generate, env);
    break;
  
  default: 
    console.error('Invalid operation: ', env.operation);
    process.exit();
}






