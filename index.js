/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
// * title : Raw Basic Nodejs
// * Description:without 3rd perty libary
// * Author: Rihan Sharif Raju
// * Date:24-3-23

// dependencies

const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const enviroment = require('./helpers/enviroments');
const data = require('./lib/data');

// app object - module scefolding
const app = {};
// testing file system
// data.create('tests', 'newFile', { name: 'ban', language: 'Bangla' }, (err) => {
//   console.log(err);
// });
// data.read('tests', 'newFile', (err, result) => {
//   console.log(err, result);
// });
data.update(
  'tests',
  'newFile',
  { name: 'England', language: 'British' },
  (err) => {
    console.log(err);
  }
);

// configuration
app.config = {};

// confifuration

// create server

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(enviroment.port, () => {
    // console.log(`env variable is ${process.env.NODE_ENV}`);
    // console.log(`lisening to port ${app.config.port}`);
    console.log(`lisening to port ${enviroment.port}`);
  });
};

// handle request response
app.handleReqRes = handleReqRes;

// start the  server
app.createServer();
