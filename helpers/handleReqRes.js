/* eslint-disable prettier/prettier */
//  * Title: Handle Request Response
//  * Description: Handle Resquest and response
//  * Author: Rihan Sharif Raju
//  * Date: 26/03/2023
//  *

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const route = require('../route');
const {
  notFoundHandler,
} = require('../handlers/routehandlers/notFoundHandler');

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
  // request handling
  // get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headersObject = req.headers;

  const requestProperties = {
    parsedUrl,
    path,
    method,
    queryStringObject,
    headersObject,
    trimmedPath,
  };

  const decoder = new StringDecoder('utf-8');
  let realData = '';

  const chosenHandler = route[trimmedPath]
    ? route[trimmedPath]
    : notFoundHandler;

  // return the final response

  req.on('data', (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on('end', () => {
    realData += decoder.end();
    chosenHandler(requestProperties, (statuscode, payload) => {
      statuscode = typeof statuscode === 'number' ? statuscode : 500;
      payload = typeof payload === 'object' ? payload : {};
      const payloadString = JSON.stringify(payload);

      res.writeHead(statuscode);
      res.end(payloadString);
    });

    // console.log(realData);
    // response handle
    res.end('Hello world');
  });
};

module.exports = handler;
