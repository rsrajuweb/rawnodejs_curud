/* eslint-disable prettier/prettier */
/*
 * Title: Route
 * Description: Route Application
 * Author: Rihan sharif raju
 * Date: 26/03/2023
 *
 */

// dependies

const { sampleHandler } = require('./handlers/routehandlers/sampleHandler');

const routes = {
  sample: sampleHandler,
};
module.exports = routes;
