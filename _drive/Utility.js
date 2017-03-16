/**
 * Utility functions for Website Generator
 */
let exec = require('child_process').execSync;

module.exports = {
  processArguments: function(process) {
    // Process arguments
    if(process.argv.length > 4) {
      console.error('Too many arguments: ' + parseInt(process.argv.length - 2));
      process.exit();
    }

    let args = process.argv.slice(0), 
        env = {};
    args.shift(); args.shift(); // Remove first two arguments
    
    env.operation = args.filter(x => x != '--no-rebuild').pop(); 
    env.isRebuild = args.filter(x => x == '--no-rebuild').length == 0;
    env.platform = /^win/.test(process.platform) ? 'windows' : 'linux';
    
    if(env.operation == undefined)
      env.operation = '--all'
    
    return env;
  },

  /**
   * Executes a given command and redirects output to stdout
   * @param command to be run
   * @private
   */
  exec(command) {
    console.log('Executing command: ', command);

    try {
      exec(command, {stdio: [0, 1, 2]});
    } catch(e) {
      console.log('Error executing command: ', command, e);
      process.exit();
    }
  },
  
  rebuildWebsite: function(buildScript, env = {isRebuild: true}) {
    if (env.isRebuild == false) {
      console.log('Skipping rebuild...')
      return;
    }
    
    console.log('Rebuilding website...');
    
    let script = __dirname + '/website/' + buildScript;
    
    if(env.platform == 'windows')
      script = '"' + script + '"';
    
    this.exec('node ' + script);
  }
}