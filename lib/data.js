/* eslint-disable prettier/prettier */
// dependece

const fs = require('fs');
const path = require('path');

const lib = {};

// base directory data folder
lib.basedir = path.join(__dirname, '/../.data/');
// write data file
lib.create = (dir, file, data, callback) => {
  // open
  fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', (err, filedescriptor) => {
    if (!err && filedescriptor) {
      // convert data to string
      const stringData = JSON.stringify(data);

      // write data to file then close it

      fs.writeFile(filedescriptor, stringData, (err2) => {
        if (!err2) {
          fs.close(filedescriptor, (error) => {
            if (!error) {
              callback(false);
            } else {
              callback('error closing the new file');
            }
          });
        } else {
          callback('error writing new file');
        }
      });
    } else {
      callback('there was an error, file already exists');
    }
  });
};
// Read data from file
lib.read = (dir, file, callback) => {
  fs.readFile(`${lib.basedir + dir}/${file}.json`, 'utf8', (err, data) => {
    callback(err, data);
  });
};

// update existing file
lib.update = (dir, file, data, callback) => {
  // file open for writing
  fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (err, fileDescription) => {
    if (!err && fileDescription) {
      // conver the data to string
      const stringData = JSON.stringify(data);
      // truncate the file
      fs.ftruncate(fileDescription, (err1) => {
        if (!err1) {
          // write the file and closw it
          fs.writeFile(fileDescription, stringData, (err2) => {
            if (!err2) {
              fs.close(fileDescription, (err3) => {
                if (!err3) {
                  callback(false);
                } else {
                  callback('error closing file');
                }
              });
            } else {
              callback('error writinf file');
            }
          });
        } else {
          callback('error truncate file');
        }
      });
    } else {
      console.log('error updateing. file may not exist');
    }
  });
};

module.exports = lib;
