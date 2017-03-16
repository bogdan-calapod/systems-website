/**
 * Google API Authentication module
 * ------------------
 *
 * Authenticates to Google API and configures the passed-in googleapis instance
 *
 */

let googleapis = require('googleapis');
let googleAuth = require('google-auth-library');
let fs = require('fs');

module.exports = class apiAuth {

  /**
   * connect - Authenticates to Google API and returns Authenticated
   * instance
   *
   * @param  {string} jwtPath          Path to JWT
   * @param  {string[]} endpoints       List of endpoints to authorize
   * @return {object}                  Authenticated GoogleApis instance
   */
  static connect (jwtPath, endpoints){
    console.log('GoogleAPI connection started');

    // Read JSON file
    let authData = JSON.parse(fs.readFileSync(jwtPath, 'utf-8', (err) => {
      if(err) {
        throw new Error('Error loading client secret file: ' + err);
        return;
      }
    }));

    console.log('Read auth data. Authorizing JWT');
    var jwt = apiAuth.getJWT(authData, endpoints);
    this.jwt = jwt;
    
    //Configure googleapi
    console.log('Setting GoogleAPI options');
    googleapis.options(
      {
        version: 'v3',
        auth: jwt
      }
    );

    return googleapis;
  }


  /**
   * getJWT - Retrieves JWT from Google
   *
   * @param  {object} authData   Client secret file
   * @param  {array}  endpoints  List of endpoints to authorize
   * @return {type}              JWT object for googleapis
   */
  static getJWT(authData, endpoints) {
    console.log('Getting JWT object');

    let auth = new googleAuth();
    let oauth2Client = new auth.OAuth2();

    let jwt = new googleapis.auth.JWT(
      authData.client_email,
      null,
      authData.private_key,
      endpoints
    );

    console.log('JWT configured');
    return jwt;
  }
}