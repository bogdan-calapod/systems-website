// Create a folder
let Drive = require('./sheets/drive.js')
let apiAuth = require('./sheets/apiAuth')
let googleApi = apiAuth.connect(
  './credentials/google-jwt.json',
  [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/spreadsheets'
  ]
)
let x = new Drive(googleApi)

x.grantAccessToEmail('bogdan.calapod@tech-lounge.ro', '0BzIGYtKj20XuZjFOekxHUWE2WlE').then(y => console.log(y))
