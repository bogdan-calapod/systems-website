/**
 * Spreadsheet module
 * ------------------
 *
 * Uses Google Spreadsheet API to interact with a provided spreadsheet URL in
 * order to get the data.
 */

let Drive = require('./drive');

module.exports = class Spreadsheet {
	constructor(googleApi, data) {
    //Connect to Google Drive
    this.googleApi = googleApi;

		this.sheets = this.googleApi.sheets('v4');
    this.drive = new Drive(googleApi);
	}

	_processSheet(r) {
		// Process sheet values
		let values = r.values,
				keys = values[0],
				result = [];

		// Remove header values
		values.shift();

		// Iterate and convert sheet to JSON object
		values.map(
			e => {
				let entry = {};

				// Add keys
				for(let i = 0; i < keys.length; i++)
					entry[keys[i]] = e[i];

				result.push(entry);
			}
		);

		return result;
	}

	getJSON(sheetID, callback){
		console.log('[SS] Getting sheet as JSON w/callback');

		this.sheets.spreadsheets.values.get(
			{
				spreadsheetId: sheetID,
				range: 'A1:Z500'
			},
			(e, r) => {
				this.drive.getFileName(sheetID).then(
					x => {
						callback({
							id: sheetID,
							name: x,
							values: this._processSheet(r)
						})
					}
				)
			}
		)
	}
};