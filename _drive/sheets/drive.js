/**
 * Google Drive module
 * ------------------
 *
 * Uses Google Spreadsheet API to interact with a provided spreadsheet URL in
 * order to get the data.
 *
 * API Documentation: https://developers.google.com/drive/v3/web/about-sdk
 */
module.exports = class Drive {
  constructor(googleApi, data) {
    //Connect to Google Drive
    this.googleApi = googleApi;

    //Configure initial data
    if (data && data != undefined) {
      this.rootFolderName = data.rootFolderName ? data.rootFolderName :
        null;
    }

    this.drive = this.googleApi.drive('v3');

		// Get initial files list
		this.drive.files.list(
			(e, r) => {
				this.files = r.files;
			}
		)
  }

  getRandomNumber() {
    return Math.floor(Math.random()*10 + 1);
  }

  getFileName(ID) {
    console.log('[Drive Submodule][GetFileName] Getting file name for ID - ', ID);
    return new Promise(
      (resolve, reject) => {
        this.drive.files.get({
            fileId: ID
          },
          (e, r) => {
            if (e !== null || (r === null)) {
              reject(e.code);
            }

						if(e != null && e.hasOwnProperty('code')) {
							if(e.code == 403){
								console.log('[Drive Submodule][GetFileName]  User rate exceeded, waiting 5 seconds');
								setTimeout(
									function (ID) {
                    console.log('[Drive Submodule][GetFileName] Retrying with ', ID);
										return this.getFileName(ID);
									}.bind(this, ID),
									this.getRandomNumber()
								);
							}
						} else {
							if(r != null){
                console.log('[Drive Submodule][GetFileName] Filename is ' + r.name)
            		resolve(r.name);
              }
						}
          }
        );
      });
  }

  /**
   * getFileID - Searches for a file containing a string and returns the ID
   */
  getFileID(name) {
    let query = 'name = \'' + name + '\'';

    console.log('[Drive Submodule][GetFileID] Getting file ID for name - ', name);
    return new Promise(
      (resolve, reject) => {
        if(name == undefined)
          reject('[Drive Submodule][GetFileID] Undefined argument - name');

				if(this.files){
					console.log('[Drive Submodule][GetFileID] Resolving query with cached data');
					let f = this.files.filter(x => x.name == name);
					if(f.length > 0)
						resolve(f[0].id);
				}

        this.drive.files.list({
            q: query
          },
          (e, r) => {
            if (e || (r === null)) {
              reject(e);
            }

						if(e != null && e.hasOwnProperty('code')) {
							if(e.code == 403){
								console.log('[Drive Submodule][GetFileID}] User rate exceeded, waiting 5 seconds');
								setTimeout(
									function (name) {
                    console.log('[Drive Submodule][GetFileID] Retrying with name - ', name);
										return this.getFileID(name);
									}.bind(this, name),
									this.getRandomNumber()
								);
              }
						}	else {
	            if (r != null && r.hasOwnProperty('files') && r.files.length > 0 && r.files[
	                0].hasOwnProperty('id'))
	              resolve(r.files[0].id); // Return the file id
	            else {
	              console.log('[Drive Submodule][GetFileID] Can\'t find file: ' + name);
	              resolve(false); // Invalid file
	            }
						}
          }
        );
      });
  }

  /**
   * createFolder - creates a folder
   *
   * data - object with name and optional properties
   */
  createFolder(data) {
    return new Promise(
      (resolve, reject) => {
        data.mimeType = 'application/vnd.google-apps.folder';

        // Throw error if no name provided
        if (!data.hasOwnProperty('name') || data.name == '')
          reject('[Drive Submodule] No name provided');

        // If provided data doesn't have a Parents property,
        // we have to add a blank one
        if (!data.hasOwnProperty('parents'))
          data.parents = [];

        console.log('[Drive Submodule] Creating folder');
        this.createFile(data).then(
          id => resolve(id)
        );
      });
  }

  createFile(data) {
    console.log('[Drive Submodule] Creating file ' + JSON.stringify(data));

    //TODO: Add error checking for data
    return new Promise(
      (resolve, reject) => {
        this.getFileID(data.name).then(
          e => {
            if (e == false)
            //File doesn't exist, we can create it
              this.drive.files.create({
                resource: data
              },
              (e, r) => {
                if (e)
                  reject(e);
                resolve(r);
              }
            );
            else
            //File exists, resolve with ID
              resolve(e);
          }
        )

      }
    )
  }

  deleteFile(id) {
    console.log('Deleting file ' + id);

    return new Promise(
      (resolve, reject) => {
        this.drive.files.delete({
            fileId: id
          },
          (e, r) => {
            if (e)
              reject(e);
            resolve(r);
          })
      }
    )
  }

  grantAccessToEmail(email, id) {
    console.log('[Drive Submodule] Granting ' + email +
      ' permissions on file ' + id);
    return new Promise(
      (resolve, reject) => {
        this.drive.permissions.create({
            fileId: id,
            sendNotificationEmail: true,
            resource: {
              type: 'user',
              role: 'writer',
              emailAddress: email
            }
          },
          (e, r) => {
            if (e)
              reject(e);
            resolve(r);
          }
        )
      }
    );
  }

  /**
   * list - lists available files
   */
  list(query) {
    console.log('[Drive] Listing files with query ', query);
    return new Promise(
      (resolve, reject) => {
        let options = query ? {
          q: query
        } : {};

        if (this.files && options == {})
          resolve(this.files);

        //Make API call and return file list
        this.drive.files.list(
          options,
          (e, r) => {
            if (e)
              reject(e);

            if (r && r.hasOwnProperty('files')) {
                resolve(r.files);
            } else
              reject('No \'files\' property for query:' + query)
          });
      });
  };

  /**
   * gets specified file
   */
  get(fileId) {
    return new Promise(
      (resolve, reject) => {
        this.drive.files.get({
            'fileId': fileId
          },
          (e, r) => {
            if (e)
              reject(e);
            resolve(r);
          }
        )
      }
    )
  }

}